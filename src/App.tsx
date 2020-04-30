import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Header} from "./components/header/Header";
import {HomeScreen} from "./components/screens/HomeScreen";
import {ConnectedTodoListScreen} from "./components/screens/TodoListScreen";
import {ConnectedAddTodoScreen} from "./components/screens/AddTodoScreen";

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
                      <ConnectedTodoListScreen/>
                  </Route>

                  <Route path={"/addTodo"}>
                      <ConnectedAddTodoScreen/>
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
