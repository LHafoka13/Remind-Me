import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Helper from "./pages/Helper";
import Member from "./pages/Member";
import "./App.css";
// import UserProvider from "./context";

function App() {
  return (
    // <UserProvider>
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
      </div>
    </Router>
    // </UserProvider>
  );
}

export default App;
