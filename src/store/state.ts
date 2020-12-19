import {State as TodosState, todosAppReducer} from "./todo/state";
import {State as FlashMessagesState, flashMessageReducer} from "./flashMessage/state";
import {State as ExchangeRateState, exchangeRateReducer} from "./exchangeRate/state";
import {State as PersonsState, personsReducer} from "./persons/state";
import {combineReducers} from "redux";

export interface State {
    todosApp: TodosState;
    flashMessages: FlashMessagesState;
    exchangeRate: ExchangeRateState,
    persons: PersonsState,
}

export const reducers = combineReducers<State>({
    todosApp: todosAppReducer,
    flashMessages:  flashMessageReducer,
    exchangeRate: exchangeRateReducer,
    persons: personsReducer,
})
