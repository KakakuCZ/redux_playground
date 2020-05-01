import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "./state";
import thunk from "redux-thunk";

// @ts-ignore
const anyWindow: any = window;

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        anyWindow.devToolsExtension ? anyWindow.devToolsExtension() : (f: any) => f
    )
)
