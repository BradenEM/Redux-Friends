import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div>
        <h1>Redux Friends</h1>
        <Link to="/login">Login</Link>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
