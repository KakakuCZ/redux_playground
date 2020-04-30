import React, {useState} from "react";
import {connect} from "react-redux";
import {addTodo} from "../state/todo/actionCreator";
import {State} from "../state/state";
import {Todo} from "../state/todo/state";

interface DispatchProps {
    onAddTodo: (text: string, owner: string) => void;
}

interface StateProps {
    todosList: Todo[];
}

const AddTodoScreen: React.FunctionComponent<StateProps & DispatchProps> = (props) => {
    const [todoTextInput, setTodoText] = useState("");
    const [ownerNameInput, setOwnerNameInput] = useState("");

    return <div className={"content"}>
        <strong>Todo count: {props.todosList.length}</strong>
        <hr />
        Name: <input
        value={ownerNameInput}
        onChange={(e) => {
            setOwnerNameInput(e.target.value);
        }} /> <br />

        Todo text: <input
            value={todoTextInput}
            onChange={(e) => {
                setTodoText(e.target.value);
            }}
        /> <br />

        <button onClick={() => {
            props.onAddTodo(todoTextInput ?? "", ownerNameInput ?? "");
        }}>
            Uložit úkol
        </button>
    </div>
}

export const ConnectedAddTodoScreen = connect(
    ({todosApp}: State): StateProps => ({
        todosList: todosApp.todosList
    }),
    (dispatch) => ({
        onAddTodo: (text: string, owner: string) => {
            dispatch(addTodo(text, owner));
        }
    }),
)(AddTodoScreen)
