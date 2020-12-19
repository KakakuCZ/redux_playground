import {ThunkDispatcher} from "./thunk";
import {Action} from "redux";
import {useDispatch as reduxUseDispatch} from "react-redux";

export function useDispatch(): ThunkDispatcher<any> {
    return reduxUseDispatch();
}
