import React from "react";
import {showMessage} from "../../store/flashMessage/actionCreator";
import {useDispatch} from "../../store/useDispatch";

export const Foo: React.FunctionComponent<any> = () => {
    const dispatch = useDispatch();

    const a = dispatch(showMessage("ahoj", "error")).then(() => {alert()});

    return <h1>Ahoj</h1>;
}
