import React from "react";
import {State} from "../store/state";
import {Todo} from "../store/todo/state";
import {addTodo, completeTodo, removeTodo} from "../store/todo/actionCreator";
import {connect} from "../store/connect";

interface StateProps {
    todosList: Todo[];
}

interface DispatchProps {
    onRemoveTodo: (id: number) => void;
    onCompleteTodo: (id: number) => void;
}

const TodoListScreen: React.FunctionComponent<StateProps & DispatchProps> = (props) => {
    return <div className={"content"}>
        TODOLIST SCREEN
        <table>
            <thead>
                <th>ID</th>
                <th>Owner</th>
                <th>Text</th>
                <th>Completed</th>
                <th>Mark as completed</th>
                <th>Delete</th>
            </thead>
            {props.todosList.map((todo) => (
                <tr className={`${todo.completed ? "green" : "red"}`}>
                    <td>{todo.id}</td>
                    <td>{todo.owner}</td>
                    <td>{todo.text}</td>
                    <td>{todo.completed ? "Yes" : "No"}</td>
                    <td>{!todo.completed && (<button onClick={() => {props.onCompleteTodo(todo.id)}}>Complete!</button>)}</td>
                    <td><button onClick={() => {props.onRemoveTodo(todo.id)}}>Delete!</button></td>
                </tr>
            ))}
        </table>
    </div>
}

export const ConnectedTodoListScreen = connect(
    ({todosApp}: State): StateProps => ({
        todosList: todosApp.todosList
    }),
    (dispatch) => ({
        onAddTodo: (text: string, owner: string) => {
            dispatch(addTodo(text, owner));
        },
        onRemoveTodo: (id: number) => {
            dispatch(removeTodo(id))
        },
        onCompleteTodo: (id: number) => {
            dispatch(completeTodo(id))
        }
    }),
)(TodoListScreen)
