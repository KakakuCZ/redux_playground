import React, {useState} from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import {PersonDetailView} from "./personDetail/PersonDetailView";
import {PersonListView} from "./personList/PersonListView";
import {PersonModel} from "./PersonModel";
import {defaultValues as personCreateFormDefaultValues, FieldNames} from "./personList/form/PersonCreateForm";

interface Props {
    personModel: PersonModel
}

export const PersonController: React.FunctionComponent<Props> = (props) => {
    const match = useRouteMatch()

    const [personCreateFormValues, setPersonCreateFormValues] = useState(personCreateFormDefaultValues)

    const onChangeInput = (fieldName: FieldNames, value: string) => {
        setPersonCreateFormValues({
            ...personCreateFormValues,
            [fieldName]: value
        });
    }

    const onSubmitForm = () => {
        props.personModel.addPerson(personCreateFormValues);
    }

    return <div>
        <Switch>
            <Route path={`${match.url}/:personId`}>
                <PersonDetailView />
            </Route>
            <Route path={match.url}>
                <PersonListView
                    persons={props.personModel.getPersonList()}
                    personCreateFormValues={personCreateFormValues}
                    onChangeFormInput={onChangeInput}
                    onSubmitForm={onSubmitForm}
                />
            </Route>
        </Switch>
    </div>
}
