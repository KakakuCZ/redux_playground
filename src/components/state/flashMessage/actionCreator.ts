import {HideAllFlashMessagesAction, HideFlashMessageAction} from "./actions";
import {FlashMessageType} from "./FlashMessage";
import {ThunkAction} from "../thunk";
import {Action} from "redux";

let lastMessageId = 1;
export function showMessage(message: string, messageType: FlashMessageType): ThunkAction<void, ShowFlashMessageAction | HideFlashMessageAction> {
    const messageId = lastMessageId++;

    return (dispatch, getState) => {
        dispatch({
            type: "SHOW_FLASH_MESSAGE",
            payload: {
                id: messageId,
                type: messageType,
                message: message,
            },
        });

        if (getState().flashMessages.autoHide) {
            setTimeout(() => {
                dispatch(hideMessage(messageId))
            }, 1000)
        }
    }
}

export function hideAllMessages(): HideAllFlashMessagesAction {
    return {
        type: "HIDE_ALL_FLASH_MESSAGES"
    }
}

export function hideMessage(id: number): HideFlashMessageAction {
    return {
        type: "HIDE_FLASH_MESSAGE",
        payload: {
            id: id,
        },
    }
}
