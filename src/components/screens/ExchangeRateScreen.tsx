import React from "react";
import {connect} from "../../store/connect";
import {loadExchangeRates} from "../../store/exchangeRate/actionCreator";
import {Currencies, Rates} from "../../store/exchangeRate/Rates";
import {getKeys} from "../../lib/array/getKey";

interface StateProps {
    isFetching: boolean;
    rates?: Rates;
}

interface DispatchProps {
    loadExchangeRates: () => void;
}

const ExchangeRateScreen: React.FunctionComponent<StateProps & DispatchProps> = (props) => {
    return <div className={"exchangeRateScreen"}>
        <button onClick={!props.isFetching ? props.loadExchangeRates: undefined}>
            {props.isFetching
                ? "Loading..."
                : "Load exchange rates"
            }
        </button>
        <hr />
        {props.rates !== undefined
            ? (
                <table>
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getKeys(props.rates)
                            .map((currency: Currencies) => (
                                <tr key={currency}>
                                    <td>{currency}</td>
                                    <td>{props.rates?.[currency]}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )
            : <strong>No rates loaded</strong>
        }
        <table>

        </table>
    </div>
}

export const ConnectedExchangeRateScreen = connect(
    ({exchangeRate}) => {
        return {
            isFetching: exchangeRate.isFetching,
            rates: exchangeRate.rates,
        }
    },
    (dispatch) => ({
        loadExchangeRates: () => {
            dispatch(loadExchangeRates());
        }
    })
)(ExchangeRateScreen);
