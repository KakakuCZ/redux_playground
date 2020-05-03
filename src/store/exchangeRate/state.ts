import {Reducer} from "redux";
import {Action} from "./actions";
import {Rates} from "./Rates";

export interface State {
    rates?: Rates;
    isFetching: boolean;
}

export const defaultState: State = {
    rates: undefined,
    isFetching: false,
}

export const exchangeRateReducer: Reducer<State, Action> = (
    state = defaultState,
    action
) => {
    switch (action.type) {
        case "LOAD_EXCHANGE_RATES":
            if (action.payload.fetching) {
                return {
                    ...state,
                    isFetching: true,
                }
            } else {
                if (action.payload.ok) {
                    const {rates}: any = action.payload.json;
                    return {
                        ...state,
                        isFetching: false,
                        rates: {
                            eur: getCurrencyCostInCZK(rates.EUR),
                            usd: getCurrencyCostInCZK(rates.USD),
                            gbp: getCurrencyCostInCZK(rates.GBP),
                        }
                    }
                } else {
                    return {
                        ...state,
                        isFetching: false,
                    }
                }
            }
        default:
            return state;
    }
}

const getCurrencyCostInCZK = (rate: number, decimals: number = 2) => {
    return Math.round((1 / rate) * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
