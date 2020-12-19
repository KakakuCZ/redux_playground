import React from "react";
import {PersonController} from "./persons/PersonController";
import {usePersonModel} from "./persons/PersonModel";

export const MvvmPersonsScreen = () => {
    const personModel = usePersonModel();
    return <div>
        <PersonController
            personModel={personModel}
        />
    </div>;
}
