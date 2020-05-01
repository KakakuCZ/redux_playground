import {Action as ReduxAction} from "redux";

interface Action extends ReduxAction {
    type: string;
}

export interface ActionWithoutPayload<Type extends string> extends Action {
    type: Type;
}

export interface ActionWithPayload<Type extends string, Payload> extends ActionWithoutPayload<Type> {
    payload: Payload;
}
