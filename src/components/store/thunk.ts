import {ThunkAction as ReduxThunkAction, ThunkDispatch as ReduxThunkDispatch} from "redux-thunk";
import {State} from "./state";
import {Action} from "redux";

export type ThunkAction<
    TReturnValue = void,
    TDispatchedAction extends Action<string> = Action<string>
>
    = ReduxThunkAction<TReturnValue, State, unknown, TDispatchedAction>

export type ThunkDispatch<
    TDispatchedAction extends Action<string>
>
    = ReduxThunkDispatch<State, unknown, TDispatchedAction>
