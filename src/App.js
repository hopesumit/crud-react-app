import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import ViewContact from "./components/ViewContact";
import Nav from "./Nav";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/add" component={AddContact} />
          <Route exact path="/users/edit/:id" component={EditContact} />
          <Route exact path="/users/:id" component={ViewContact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
