import {Reducer} from "redux";
import {Actions, ADD_TODO, COMPLETE_TODO, REMOVE_TODO} from "./actions";

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
    todosList: [
        {id: 0, completed: false, text: "test", owner: "Michael"}
    ],
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
        case REMOVE_TODO: {
            return {
                ...state,
                todosList: state.todosList.filter((todo) => {
                    return todo.id !== action.payload.id
                })
            }
        }
        case COMPLETE_TODO: {
            return {
                ...state,
                todosList: state.todosList.map((todo) => {
                    return {
                        ...todo,
                        completed: todo.id === action.payload.id ? true : todo.completed,
                    }
                })
            }
        }
        default: {
            return state;
        }
    }
}
