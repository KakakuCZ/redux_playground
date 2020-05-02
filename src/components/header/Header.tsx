import * as React from "react";
import {ReactNode} from "react";
import {connect} from "react-redux";
import {State} from "../store/state";
import {FlashMessage} from "../store/flashMessage/FlashMessage";
import {hideMessage} from "../store/flashMessage/actionCreator";

interface OwnProps {
    children: ReactNode
}

interface StateProps {
    flashMessagesList: FlashMessage[];
}

interface DispatchProps {
    hideMessageById: (id: number) => void;
}

const Header: React.FunctionComponent<OwnProps & StateProps & DispatchProps> = (props) => {
    return <div className={"header"}>
        {props.children}

        {props.flashMessagesList && props.flashMessagesList.length > 0 && (
            <div className={"flashMessagesWrapper"}>
                {props.flashMessagesList.map((flashMessage) => (
                    <div
                        key={flashMessage.id}
                        className={`flashMessage ${flashMessage.type}`}
                        onClick={() => {props.hideMessageById(flashMessage.id)}}
                    >
                        {flashMessage.text}
                    </div>
                ))}
            </div>
        )}
    </div>
}

export const ConnectedHeader = connect<StateProps, DispatchProps, OwnProps, State>(
    ({flashMessages}: State): StateProps => ({
        flashMessagesList: flashMessages.flashMessageList
    }),
    (dispatch) => ({
        hideMessageById: (id: number) => {
            dispatch(hideMessage(id));
        }
    })
)(Header)
