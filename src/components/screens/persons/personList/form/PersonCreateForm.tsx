import React from "react";
import {Person} from "../../../../../store/persons/Person";

export type FieldNames = keyof Pick<Person, "firstName" | "lastName" | "employment" | "salary">;

interface StateProps {
    values: ValuesType;
}

interface DispatchProps {
    onChangeInput: (fieldName: FieldNames, currentValue: string) => void;
    onSubmitForm: () => void;
}

export type ValuesType = {
    [fieldName in FieldNames]: string;
}

export const defaultValues: ValuesType = {
    firstName: "John",
    lastName: "Doe",
    salary: "10000",
    employment: "Programmer"
}

type Props = StateProps & DispatchProps;

export const PersonCreateForm: React.FunctionComponent<Props> = (props) => {
    const onChangeHandlerCreator = (fieldName: FieldNames) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            props.onChangeInput(fieldName, e.target.value)
        }
    }

    return <div>
        Firstname: <input type={"text"} onChange={onChangeHandlerCreator('firstName')} value={props.values.firstName} /> <br />
        Lastname: <input type={"text"} onChange={onChangeHandlerCreator('lastName')} value={props.values.lastName} /> <br />
        Employment: <input type={"text"} onChange={onChangeHandlerCreator('employment')} value={props.values.employment} /> <br />
        Salary: <input type={"text"} onChange={onChangeHandlerCreator('salary')} value={props.values.salary} /> <br />
        <button onClick={props.onSubmitForm}>Create</button>
    </div>
}
