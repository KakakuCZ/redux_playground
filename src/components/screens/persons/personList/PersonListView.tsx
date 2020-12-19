import {Link} from "react-router-dom";
import React from "react";
import {Person} from "../../../../store/persons/Person";
import {FieldNames, PersonCreateForm, ValuesType as PersonCreateFormValues} from "./form/PersonCreateForm";

interface StateProps {
    persons: Person[];
    personCreateFormValues: PersonCreateFormValues;
}

interface DispatchProps {
    onChangeFormInput: (fieldName: FieldNames, currentValue: string) => void;
    onSubmitForm: () => void;
}

type Props = StateProps & DispatchProps;

export const PersonListView: React.FunctionComponent<Props> = (props) => {
    return <div>
        <table>
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Employment</th>
                    <th>Salary</th>
                    <th>Link to detail</th>
                </tr>
            </thead>
            <tbody>
                {props.persons.map((person) => (
                    <tr key={person.id}>
                        <td>{person.firstName}</td>
                        <td>{person.lastName}</td>
                        <td>{person.employment}</td>
                        <td>{person.salary} $</td>
                        <td>
                            <Link to={`mvvm-persons/${person.id}`}>
                                Detail
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <hr />
        <br />
        <br />
        <br />

        <PersonCreateForm
            onChangeInput={props.onChangeFormInput}
            onSubmitForm={props.onSubmitForm}
            values={props.personCreateFormValues}
        />
    </div>;
}
