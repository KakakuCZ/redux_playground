import {ADD_TODO, AddTodoAction, COMPLETE_TODO, CompleteTodoAction, REMOVE_TODO, RemoveTodoAction} from "./actions";

export function addTodo(text: string, owner: string): AddTodoAction {
    return {
        type: ADD_TODO,
        payload: {
            text: text,
            owner: owner,
        },
    }
}

export function completeTodo(id: number): CompleteTodoAction {
    return {
        type: COMPLETE_TODO,
        payload: {
            id: id,
        }
    }
}

export function removeTodo(id: number): RemoveTodoAction {
    return {
        type: REMOVE_TODO,
        payload: {
            id: id,
        }
    }
}
