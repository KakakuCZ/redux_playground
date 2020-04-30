import {ActionWithPayload} from "../actionTypes";

export const ADD_TODO = "ADD_TODO";

interface AddTodoActionPayload {
    text: string;
    owner: string;
}

export interface AddTodoAction extends ActionWithPayload<typeof ADD_TODO, AddTodoActionPayload> {
}

export type Actions =
    AddTodoAction;
