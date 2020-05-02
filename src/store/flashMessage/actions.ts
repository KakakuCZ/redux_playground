import {ActionWithoutPayload, ActionWithPayload} from "../actionTypes";
import {FlashMessageType} from "./FlashMessage";

export const SHOW_FLASH_MESSAGE = "SHOW_FLASH_MESSAGE";
export const HIDE_FLASH_MESSAGE = "HIDE_FLASH_MESSAGE";
export const HIDE_ALL_FLASH_MESSAGES = "HIDE_ALL_FLASH_MESSAGES";
export const TOGGLE_AUTO_HIDE = "TOGGLE_AUTO_HIDE";

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

export interface ToggleAutoHideAction extends ActionWithoutPayload<typeof TOGGLE_AUTO_HIDE>{
}

export type Actions = ShowFlashMessageAction |
    HideFlashMessageAction |
    HideAllFlashMessagesAction |
    ToggleAutoHideAction;
