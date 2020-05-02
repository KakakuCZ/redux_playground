import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "./state";
import thunk from "redux-thunk";
import {loggerMiddleware} from "./middleware/loggerMiddleware";

const anyWindow: any = window;

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(loggerMiddleware, thunk),
        anyWindow.devToolsExtension ? anyWindow.devToolsExtension() : (f: any) => f
    )
)
