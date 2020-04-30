import React from "react";
import {State} from "../state/state";
import {connect} from "react-redux";
import {Todo} from "../state/todo/state";
import {addTodo} from "../state/todo/actionCreator";

interface StateProps {
    todosList: Todo[];
}

interface DispatchProps {

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
                    <td><button>Complete!</button></td>
                    <td><button>Delete!</button></td>
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
        }
    }),
)(TodoListScreen)
