import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Form from "./components/Form";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Luke API Walker</h1>
        <hr />
        <Form></Form>
        <hr />
        <Switch>
          <Route exact path = "/:category/:id">
            {/*Details Component Here*/}
            <Details></Details>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
