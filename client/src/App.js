import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Helper from "./pages/Helper";
import Member from "./pages/Member";
import "./App.css";


function App() {
  return (
   
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={["/", "home"]}>
            <Home />
          </Route>
          <Route exact path={["/register", "register"]}>
            <Register />
          </Route>
          <Route exact path={["/helper", "helper"]}>
            <Helper />
          </Route>
          <Route exact path={["/member", "individual"]}>
            <Member />
          </Route>
        </Switch>
        <Route path="/helper/:id" component={Helper} />
        <Route path="/member/:id" component={Member} />
      </div>
    </Router>
 
  );
}

export default App;
