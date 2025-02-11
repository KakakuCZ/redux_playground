import React from "react";
import {hideAllMessages, showMessage, toggleAutoHide} from "../../store/flashMessage/actionCreator";
import {FlashMessageType} from "../../store/flashMessage/FlashMessage";
import {State} from "../../store/state";
import {connect} from "../../store/connect";

interface DispatchProps {
    showFlashMessage: (message: string, messageType: FlashMessageType) => void;
    hideAllMessages: () => void;
    toggleAutoHide: () => void;
}

interface StateProps {
    flashMessagesCreated: number;
    isAutohideMessageEnabled: boolean;
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
        </button>
        <button
            className={`${props.isAutohideMessageEnabled ? "green" : "red"}`}
            onClick={props.toggleAutoHide}
        >
            Autohide messages: {props.isAutohideMessageEnabled ? "On" : "Off"}
        </button>
        <br />
        <strong>Count of created messages: {props.flashMessagesCreated}</strong>
    </div>
}

export const ConnectedFlashMessageScreen = connect(
    ({flashMessages}: State) => ({
        flashMessagesCreated: flashMessages.flashMessagesCreated,
        isAutohideMessageEnabled: flashMessages.autoHide,
    }),
    (dispatch) => ({
        showFlashMessage: (message: string, messageType: FlashMessageType) => {
            dispatch(showMessage(message, messageType));
        },
        hideAllMessages: () => {
            dispatch(hideAllMessages());
        },
        toggleAutoHide: () => {
            dispatch(toggleAutoHide());
        }
    }),
)(FlashMessageScreen)

