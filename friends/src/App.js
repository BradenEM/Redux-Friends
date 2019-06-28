import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <h1>Redux Friends</h1>
        <Link to="/login">Login</Link>
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
