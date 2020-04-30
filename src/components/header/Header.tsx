import * as React from "react";
import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

export const Header = (props: Props) => {
    return <div className={"header"}>
        {props.children}
    </div>
}
