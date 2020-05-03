import {LOAD_EXCHANGE_RATES} from "./actions";
import {DispatchAction as FetchAction} from "../middleware/fetcher";
import {ActionWithoutPayload} from "../actionTypes";

export function loadExchangeRates(): ActionWithoutPayload<typeof LOAD_EXCHANGE_RATES> & FetchAction {
    return {
        type: LOAD_EXCHANGE_RATES,
        fetch: {
            url: "https://api.exchangeratesapi.io/latest?base=CZK",
            method: "GET",
            responseType: "json",
            isCrossOrigin: true,
        }
    }
}
