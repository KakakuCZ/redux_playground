import React from "react";
import {useParams} from "react-router-dom";

export const PersonDetailView = () => {
    const {personId} = useParams();

    //TODO: tady bych čekal ten form, ale musel bych to liftnout do controlleru, ale tam se zase bude blbě získávat to personId, protože bude "globální"

    return <div>
       PersonDetailView - {personId}
    </div>;
}
