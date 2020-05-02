import {State} from "./state";
import {ThunkDispatch} from "./thunk";
import {connect as reactReduxConnect} from "react-redux";

export function connect<StateProps, DispatchProps, OwnProps = {}>(
    mapStateToProps: (state: State) => StateProps,
    mapDispatchToProps: (dispatch: ThunkDispatch<any>) => DispatchProps,
) {
    return reactReduxConnect<StateProps, DispatchProps, OwnProps, State>(
        mapStateToProps,
        mapDispatchToProps as any,
    )
}
