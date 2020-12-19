import {useSelector as rawUseSelector} from "react-redux";
import {State} from "./state";

export function useSelector<TSelected>(
    selector: (state: State) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
): TSelected {
    return rawUseSelector<State, TSelected>(selector, equalityFn);
}
