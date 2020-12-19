import {Person} from "../../../store/persons/Person";
import {useSelector} from "../../../store/useSelector";
import {ValuesType as PersonValues} from "./personList/form/PersonCreateForm";
import {useDispatch} from "react-redux";
import {addPerson as addPersonAction} from "../../../store/persons/actionCreator";

export interface PersonModel {
    getPersonList: () => Person[];
    addPerson: (personData: PersonValues) => void;
}

export const usePersonModel = (): PersonModel => {
    const dispatch = useDispatch();
    const personList = useSelector((state) => state.persons.personList)

    const getPersonList = () => {
        return personList;
    }

    const addPerson = (personData: PersonValues) => {
        dispatch(addPersonAction(personData));
    }

    return {
        getPersonList,
        addPerson,
    }
}
