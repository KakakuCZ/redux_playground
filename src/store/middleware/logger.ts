import {Action, Middleware, MiddlewareAPI} from "redux";
import {State} from "../state";
import {ThunkDispatch} from "../thunk";

export const logger: Middleware = (store: MiddlewareAPI<ThunkDispatch<any>, State>) => {
    return (next) => (action: Action) => {
        if (typeof action === "function") {
            console.log("Logger: Thunk action fired");
        } else {
            console.log(`Logger: Redux action ${action.type} called`);
        }

        next(action);
    }
}
