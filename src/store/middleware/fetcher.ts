import {AnyAction, Middleware, MiddlewareAPI} from "redux";
import {ThunkDispatcher} from "../thunk";
import {State} from "../state";
import {ActionWithPayload} from "../actionTypes";
import {showMessage} from "../flashMessage/actionCreator";

interface Options {
    url: string;
    method: "GET" | "POST";
    responseType: "json" | "text";
    isCrossOrigin: boolean;
}
type DefaultOptions = Pick<Options, "method" | "isCrossOrigin">

const defaultOptions: DefaultOptions = {
    method: "GET",
    isCrossOrigin: false,
}

export interface FetchAction{
    fetch?: Omit<Options, keyof DefaultOptions> & Partial<DefaultOptions>;
}

type DispatchActionWithFetch = AnyAction & FetchAction;

export interface StoreActionPayload {
    fetching?: boolean;
    ok?: boolean;
    json?: any;
    text?: string;
    status?: number;
}

export const fetcher: Middleware = ({dispatch}: MiddlewareAPI<ThunkDispatcher<any>, State>) => {
    return (next) => (action: DispatchActionWithFetch) => {
        if (!action.fetch) {
            next(action);
        } else {
            const options: Options = {
                ...defaultOptions,
                ...action.fetch,
            };

            const fetchAction: ActionWithPayload<any, StoreActionPayload> & FetchAction = {
                ...action,
                payload: {
                    ...action.payload,
                    fetching: true,
                }
            }
            delete fetchAction.fetch;

            return new Promise<StoreActionPayload>(
                (resolve, reject) => {
                    const responsePromise = fetch(
                        options.url,
                        {
                            method: options.method,
                            credentials: "same-origin",

                        }
                    ).then((response) => {
                        if (response.ok) {
                            switch (options.responseType) {
                                case "json": {
                                    return response.json();
                                }
                                case "text": {
                                    return response.text();
                                }
                                default: {
                                    throw new Error("Unknown response return format");
                                }
                            }
                        } else {
                            dispatch({
                                ...fetchAction,
                                payload: {
                                    ...fetchAction.payload,
                                    fetching: false,
                                    ok: false,
                                    status: response.status,
                                }
                            } as ActionWithPayload<any, StoreActionPayload>)

                            reject();
                        }
                    });

                    responsePromise.catch(
                        (err) => {
                            reject(new Error(err));
                        }
                    )

                    setTimeout(
                        () => {
                            reject(new Error("Request timeout"));
                        },
                    5000
                    );

                    switch (options.responseType) {
                        case "json":
                            responsePromise.then((jsonData) => {
                                dispatch({
                                    ...fetchAction,
                                    payload: {
                                        ...fetchAction.payload,
                                        fetching: false,
                                        ok: true,
                                        json: jsonData,
                                    }
                                } as ActionWithPayload<any, StoreActionPayload>);

                                resolve(jsonData);
                            });
                            break;
                        case "text":
                            responsePromise.then((text) => {
                                dispatch({
                                    ...fetchAction,
                                    payload: {
                                        ...fetchAction.payload,
                                        fetching: false,
                                        ok: true,
                                        text: text,
                                    }
                                } as ActionWithPayload<any, StoreActionPayload>);
                            })
                            break;
                        default:
                            throw new Error("Not dispatch is connected to resolve this response type");
                    }

                    next(fetchAction);
                }
            ).catch((err) => {
                dispatch({
                    ...fetchAction,
                    payload: {
                        ...fetchAction.payload,
                        fetching: false,
                        ok: false,
                    }
                })
                dispatch(showMessage(err.message, "error"))
            });
        }
    }
}
