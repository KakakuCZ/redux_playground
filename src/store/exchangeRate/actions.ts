import {ActionWithPayload} from "../actionTypes";
import {StoreActionPayload} from "../middleware/fetcher";

export const LOAD_EXCHANGE_RATES = "LOAD_EXCHANGE_RATES";

export interface LoadExchangeRatesAction extends ActionWithPayload<typeof LOAD_EXCHANGE_RATES, StoreActionPayload>{
}

export type Action = LoadExchangeRatesAction;
