import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {ConnectedHeader} from "./components/header/Header";
import {HomeScreen} from "./components/screens/HomeScreen";
import {ConnectedTodoListScreen} from "./components/screens/TodoListScreen";
import {ConnectedAddTodoScreen} from "./components/screens/AddTodoScreen";
import {ConnectedFlashMessageScreen} from "./components/screens/FlashMessageScreen";

function App() {
  return (
      <div className="App">
          <Router>
              <ConnectedHeader>
                <ul className={"navigation"}>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/todoList"}>List TODOs</Link></li>
                    <li><Link to={"/addTodo"}>Add TODO</Link></li>
                    <li><Link to={"/flashMessage"}>Flash message</Link></li>
                </ul>
              </ConnectedHeader>

              <Switch>
                  <Route path={"/todoList"}>
                      <ConnectedTodoListScreen/>
                  </Route>

                  <Route path={"/addTodo"}>
                      <ConnectedAddTodoScreen/>
                  </Route>

                  <Route path={"/flashMessage"}>
                      <ConnectedFlashMessageScreen />
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
