import {Reducer} from "redux";
import {Person} from "./Person";
import {Action, ADD_PERSON, UPDATE_PERSON} from "./action";

export interface State {
    personList: Person[];
}

const defaultState: State = {
    personList: [
        {
            id: 1,
            firstName: "Michael",
            lastName: "Kufner",
            employment: "programmer",
            salary: 25000,
            email: "michael.kufner@email.cz",
            phone: "+420123456789",
        },
        {
            id: 2,
            firstName: "Jan",
            lastName: "Novák",
            employment: "Account manager",
            salary: 10000,
            email: "jan.novak@email.cz",
            phone: "+420123456789",
        },
        {
            id: 3,
            firstName: "Martin",
            lastName: "Svoboda",
            employment: "Project manager",
            salary: 15000,
            email: "martin.svoboda@email.cz",
            phone: "+420123456789",
        },
    ]
}

export const personsReducer: Reducer<State, Action>  = (
    state: State = defaultState,
    action: Action
) => {
    switch (action.type) {
        case UPDATE_PERSON:
            return {
                ...state,
                personList: state.personList.map((person) => {
                    if (person.id === action.payload.id) {
                        return {
                            ...person,
                            ...action.payload.dataToUpdate
                        };
                    }

                    return person;
                })
            }
        case ADD_PERSON: {
            const lastPersonId = getLastPersonId(state.personList) ?? 0;
            return {
                ...state,
                personList: [
                    ...state.personList,
                    {
                        ...action.payload,
                        id: lastPersonId + 1,
                        salary: Number(action.payload.salary)
                    }
                ]
            }
        }
        default:
            return state;
    }
}

function getLastPersonId(personList: State["personList"]): number | null {
    const lastPerson = personList[personList.length - 1];
    return lastPerson
        ? lastPerson.id
        : null;
}
