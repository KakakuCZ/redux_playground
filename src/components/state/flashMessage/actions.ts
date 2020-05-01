import {ActionWithoutPayload, ActionWithPayload} from "../actionTypes";
import {FlashMessageType} from "./FlashMessage";

const SHOW_FLASH_MESSAGE = "SHOW_FLASH_MESSAGE";
const HIDE_FLASH_MESSAGE = "HIDE_FLASH_MESSAGE";
const HIDE_ALL_FLASH_MESSAGES = "HIDE_ALL_FLASH_MESSAGES";

interface ShowFlashMessageActionPayload {
    id: number;
    message: string;
    type: FlashMessageType;
}

interface HideFlashMessageActionPayload {
    id: number;
}

export interface ShowFlashMessageAction extends ActionWithPayload<typeof SHOW_FLASH_MESSAGE, ShowFlashMessageActionPayload> {
}

export interface HideFlashMessageAction extends ActionWithPayload<typeof HIDE_FLASH_MESSAGE, HideFlashMessageActionPayload> {
}

export interface HideAllFlashMessagesAction extends ActionWithoutPayload<typeof HIDE_ALL_FLASH_MESSAGES> {
}

export type Actions = ShowFlashMessageAction |
    HideFlashMessageAction |
    HideAllFlashMessagesAction;
