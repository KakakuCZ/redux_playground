import {ADD_TODO, AddTodoAction} from "./actions";

export function addTodo(text: string, owner: string): AddTodoAction {
    return {
        type: ADD_TODO,
        payload: {
            text: text,
            owner: owner,
        },
    }
}
