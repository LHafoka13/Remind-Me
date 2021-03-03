import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Helper from "./pages/Helper";
import Individual from "./pages/Individual";

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
          <Route exact path={["/individual", "individual"]}>
            <Individual />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
