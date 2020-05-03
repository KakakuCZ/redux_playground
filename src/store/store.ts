import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "./state";
import thunk from "redux-thunk";
import {logger} from "./middleware/logger";
import {fetcher} from "./middleware/fetcher";

const anyWindow: any = window;

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(logger, thunk, fetcher),
        anyWindow.devToolsExtension ? anyWindow.devToolsExtension() : (f: any) => f
    )
)
