import {Person} from "./Person";
import {ADD_PERSON, AddPersonAction, UPDATE_PERSON, UpdatePersonAction} from "./action";
import {
    ValuesType,
    ValuesType as PersonCreateFormValues
} from "../../components/screens/persons/personList/form/PersonCreateForm";

export function updatePerson(
    id: number,
    dataToUpdate: Partial<Omit<Person, "id">>
): UpdatePersonAction {
    return {
        type: UPDATE_PERSON,
        payload: {
            id,
            dataToUpdate,
        }
    };
}

export function addPerson(
    data: ValuesType
): AddPersonAction {
    return {
        type: ADD_PERSON,
        payload: {
            ...data
        }
    };
}
