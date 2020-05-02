import {ActionWithPayload} from "../actionTypes";

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

interface AddTodoActionPayload {
    id: number;
    text: string;
    owner: string;
}

interface CompleteTodoActionPayload {
    id: number;
}

interface RemoveTodoActionPayload {
    id: number;
}

export interface AddTodoAction extends ActionWithPayload<typeof ADD_TODO, AddTodoActionPayload> {
}

export interface CompleteTodoAction extends ActionWithPayload<typeof COMPLETE_TODO, CompleteTodoActionPayload> {
}

export interface RemoveTodoAction extends ActionWithPayload<typeof REMOVE_TODO, RemoveTodoActionPayload> {
}

export type Actions =
    AddTodoAction |
    CompleteTodoAction |
    RemoveTodoAction;
