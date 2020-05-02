import {FlashMessage} from "./FlashMessage";
import {Reducer} from "redux";
import {Actions, HIDE_ALL_FLASH_MESSAGES, HIDE_FLASH_MESSAGE, SHOW_FLASH_MESSAGE, TOGGLE_AUTO_HIDE} from "./actions";

export interface State {
    flashMessageList: FlashMessage[];
    flashMessagesCreated: number;
    autoHide: boolean;
}

export const defaultState: State = {
    flashMessageList: [],
    flashMessagesCreated: 0,
    autoHide: true,
}

export const flashMessageReducer: Reducer<State, Actions> = (
    state: State = defaultState,
    action: Actions
) => {
    switch (action.type) {
        case SHOW_FLASH_MESSAGE:
            return {
                ...state,
                flashMessageList: [
                    ...state.flashMessageList,
                    {
                        id: action.payload.id,
                        text: action.payload.message,
                        type: action.payload.type,
                    }
                ],
                flashMessagesCreated: ++state.flashMessagesCreated,
            };
        case HIDE_FLASH_MESSAGE:
            return {
                ...state,
                flashMessageList: state.flashMessageList.filter((flashMessage) => {
                    return flashMessage.id !== action.payload.id;
                }),
            }
        case HIDE_ALL_FLASH_MESSAGES:
            return {
                ...state,
                flashMessageList: [],
            }
        case TOGGLE_AUTO_HIDE:
            return {
                ...state,
                autoHide: !state.autoHide,
            }
        default:
            return state;
    }
}
