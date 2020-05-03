import {State as TodosState, todosAppReducer} from "./todo/state";
import {State as FlashMessagesState, flashMessageReducer} from "./flashMessage/state";
import {State as ExchangeRateState, exchangeRateReducer} from "./exchangeRate/state";
import {combineReducers} from "redux";

export interface State {
    todosApp: TodosState;
    flashMessages: FlashMessagesState;
    exchangeRate: ExchangeRateState
}

export const reducers = combineReducers<State>({
    todosApp: todosAppReducer,
    flashMessages:  flashMessageReducer,
    exchangeRate: exchangeRateReducer,
})
