import {createStore} from "redux";
import {reducers} from "./state";

// @ts-ignore
const anyWindow: any = window;
const enhancers = anyWindow.devToolsExtension ? anyWindow.devToolsExtension() : (f: any) => f;

export const store = createStore(reducers, enhancers)
