import {Action} from "redux";

/**
 * With first generic parameter you can specify the type thunk's return value. With the second
 * generic parameter you can specify the type of dispatched action.
 */
export type Thunk<
    TReturnValue = void,
    TDispatchable = any,
    TState = any,
    TDispatcher extends ThunkDispatcher<TDispatchable> = ThunkDispatcher<TDispatchable>
    >
    = (
    dispatch: TDispatcher,
    getState: () => TState
) => TReturnValue;

export type ThunkDispatcher<TDispatchable> =
    <TAction extends TDispatchable>(action: TAction)
        => (
        TAction extends Thunk<any, TDispatchable>
            ? ThunkReturnType<TAction>
            : any /* See Note #1 below */
        );

type ThunkReturnType<TThunk> = (
    TThunk extends Thunk<infer TReturnType, any> ? TReturnType : never
    );

export type ThunkAction<
    TReturnValue = void,
    TDispatchable extends AnyDispatchableValue = AnyDispatchableValue
    >
    = Thunk<
    TReturnValue,
    TDispatchable
    >;

export type DispatchableValue<Type extends string, TAction extends Action<Type>, State extends {}> = (
    TAction
    | ((dispatch: Dispatch<DispatchableValue<any, any, any>>, getState: () => State) => any /* Not today */)
    );

export type AnyDispatchableValue = DispatchableValue<string, Action<any>, { /* State not available */ }>;

export interface Dispatch<TDispatchableValue extends DispatchableValue<string, Action<string>, {}>> {
    (action: TDispatchableValue): void;
}
