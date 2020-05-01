import {HideAllFlashMessagesAction, HideFlashMessageAction, ShowFlashMessageAction} from "./actions";
import {FlashMessageType} from "./FlashMessage";

let lastMessageId = 1;
export function showMessage(message: string, messageType: FlashMessageType): ShowFlashMessageAction {
    return {
        type: "SHOW_FLASH_MESSAGE",
        payload: {
            id: lastMessageId++,
            type: messageType,
            message: message,
        },
    };
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
