import {ActionWithPayload} from "../actionTypes";
import {Person} from "./Person";
import {ValuesType as PersonCreateFormValues} from "../../components/screens/persons/personList/form/PersonCreateForm";
export const UPDATE_PERSON = "persons/UPDATE_PERSON";
export const ADD_PERSON = "persons/ADD_PERSON";

export interface UpdatePersonAction extends ActionWithPayload<typeof UPDATE_PERSON, UpdatePersonActionPayload>{}
interface UpdatePersonActionPayload {
    id: number;
    dataToUpdate?: Partial<Omit<Person, "id">>
}

export interface AddPersonAction extends ActionWithPayload<typeof ADD_PERSON, AddPersonActionPayload>{}
interface AddPersonActionPayload extends PersonCreateFormValues{}

export type Action = UpdatePersonAction | AddPersonAction;
