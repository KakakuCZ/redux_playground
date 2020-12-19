import {State} from "./state";
import {connect as reactReduxConnect} from "react-redux";
import {ThunkDispatcher} from "./thunk";

export function connect<StateProps, DispatchProps, OwnProps = {}>(
    mapStateToProps: (state: State) => StateProps,
    mapDispatchToProps: (dispatch: ThunkDispatcher<any>) => DispatchProps,
) {
    return reactReduxConnect<StateProps, DispatchProps, OwnProps, State>(
        mapStateToProps,
        mapDispatchToProps as any,
    )
}
