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
import {ConnectedExchangeRateScreen} from "./components/screens/ExchangeRateScreen";
import { MvvmPersonsScreen } from './components/screens/MvvmPersonsScreen';

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
                    <li><Link to={"/exchangeRate"}>Exchange rate</Link></li>
                    <li><Link to={"/mvvm-persons"}>MVVM Person List</Link></li>
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

                  <Route path={"/exchangeRate"}>
                      <ConnectedExchangeRateScreen />
                  </Route>

                  <Route path={"/mvvm-persons"}>
                      <MvvmPersonsScreen />
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
