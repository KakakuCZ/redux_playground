import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Header} from "./components/header/Header";
import {HomeScreen} from "./components/screens/HomeScreen";
import {TodoListScreen} from "./components/screens/TodoListScreen";
import {AddTodoScreen} from "./components/screens/AddTodoScreen";

function App() {
  return (
      <div className="App">
          <Router>
              <Header>
                <ul className={"navigation"}>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/todoList"}>List TODOs</Link></li>
                    <li><Link to={"/addTodo"}>Add TODO</Link></li>
                </ul>
              </Header>

              <Switch>
                  <Route path={"/todoList"}>
                      <TodoListScreen/>
                  </Route>

                  <Route path={"/addTodo"}>
                      <AddTodoScreen/>
                  </Route>

                  <Route path={"/"}>
                      <HomeScreen />
                  </Route>
              </Switch>
          </Router>
    </div>
  );
}

export default App;
