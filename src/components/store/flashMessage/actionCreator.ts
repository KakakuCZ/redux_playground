import {
    HIDE_ALL_FLASH_MESSAGES,
    HIDE_FLASH_MESSAGE,
    HideAllFlashMessagesAction,
    HideFlashMessageAction,
    SHOW_FLASH_MESSAGE,
    ShowFlashMessageAction,
    TOGGLE_AUTO_HIDE,
    ToggleAutoHideAction
} from "./actions";
import {FlashMessageType} from "./FlashMessage";
import {ThunkAction} from "../thunk";

let lastMessageId = 1;
export function showMessage(message: string, messageType: FlashMessageType): ThunkAction<void, ShowFlashMessageAction | HideFlashMessageAction> {
    const messageId = lastMessageId++;

    return (dispatch, getState) => {
        const state = getState();

        dispatch({
            type: SHOW_FLASH_MESSAGE,
            payload: {
                id: messageId,
                type: messageType,
                message: message,
            },
        });

        if (state.flashMessages.autoHide) {
            setTimeout(() => {
                //We must call getState because state could potentialy change between timeout start and end
                if (getState().flashMessages.autoHide) {
                    dispatch(hideMessage(messageId))
                }
            }, 1000)
        }
    }
}

export function hideAllMessages(): HideAllFlashMessagesAction {
    return {
        type: HIDE_ALL_FLASH_MESSAGES
    }
}

export function hideMessage(id: number): HideFlashMessageAction {
    return {
        type: HIDE_FLASH_MESSAGE,
        payload: {
            id: id,
        },
    }
}

export function toggleAutoHide(): ToggleAutoHideAction {
    return {
        type: TOGGLE_AUTO_HIDE,
    }
}
