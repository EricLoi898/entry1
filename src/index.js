import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./css.css";

function Index() {
  return <h2>Home</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function Register() {
  return <h2>Register</h2>;
}

function NotFound() {
  return <h2>404 NotFound</h2>;
}

const routing = (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/Login/">Login</Link>
      <Link to="/Register/">Register</Link>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/Login/" component={Login} />
        <Route path="/Register/" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
