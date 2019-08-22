import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./css.css";

function Index() {
  return (
    <React.Fragment>
      <h2>Home</h2>
      <h3>Welcome to my website!</h3>
    </React.Fragment>
  );
}

function Login() {
  return (
    <React.Fragment>
      <h2>Login</h2>
      <form action="/auth">
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" className="username" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" className="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  );
}

function Register() {
  return (
    <React.Fragment>
      <h2>Register</h2>
      <form action="/auth">
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" className="username" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" className="password" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" className="password" />
        <br />
        <button type="submit">Register</button>
      </form>
    </React.Fragment>
  );
}

function NotFound() {
  return <h2>404 NotFound!</h2>;
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
