import {Reducer} from "redux";
import {Actions, ADD_TODO} from "./actions";

export interface Todo {
    id: number;
    text: string;
    owner: string;
    completed: boolean;
}

export interface State {
    todosList: Todo[];
}

export const defaultState: State = {
    todosList: [],
}

let lastTodoId = 1;
export const todosAppReducer: Reducer<State, Actions> = (state: State = defaultState, action: Actions): State => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todosList: [
                    ...state.todosList,
                    {
                        id: lastTodoId++,
                        text: action.payload.text,
                        owner: action.payload.owner,
                        completed: false,
                    }
                ]
            }
        }
        default: {
            return state;
        }
    }
}
