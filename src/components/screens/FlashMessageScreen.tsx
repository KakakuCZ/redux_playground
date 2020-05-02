import React from "react";
import {hideAllMessages, showMessage} from "../state/flashMessage/actionCreator";
import {FlashMessageType} from "../state/flashMessage/FlashMessage";
import {State} from "../state/state";
import {connect} from "../state/connect";

interface DispatchProps {
    showFlashMessage: (message: string, messageType: FlashMessageType) => void;
    hideAllMessages: () => void;
}

interface StateProps {
    flashMessagesCreated: number;
}

const FlashMessageScreen = (props: DispatchProps & StateProps) => {
    return <div className={"flashMessageScreen"}>
        <button
            onClick={() => {
                props.showFlashMessage("Sample text of info", "info")
            }}
        >
            Fire info!
        </button>
        <button
            onClick={() => {
                props.showFlashMessage("Sample text of warning", "warning")
            }}
        >
            Fire warning!
        </button>
        <button
            onClick={() => {
                props.showFlashMessage("Sample text of error", "error")
            }}
        >
            Fire error!
        </button>
        <button
            onClick={() => {
                props.hideAllMessages()
            }}
        >
            Hide ALL messages!
        </button> <br />
        <strong>Count of created messages: {props.flashMessagesCreated}</strong>
    </div>
}

export const ConnectedFlashMessageScreen = connect(
    ({flashMessages}: State) => ({
        flashMessagesCreated: flashMessages.flashMessagesCreated
    }),
    (dispatch) => ({
        showFlashMessage: (message: string, messageType: FlashMessageType) => {
            dispatch(showMessage(message, messageType));
        },
        hideAllMessages: () => {
            dispatch(hideAllMessages());
        }
    }),
)(FlashMessageScreen)

