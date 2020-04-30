import {State as TodosState, todosAppReducer} from "./todo/state";
import {combineReducers} from "redux";

export interface State {
    todosApp: TodosState;
}

export const reducers = combineReducers<State>({
    todosApp: todosAppReducer
})
