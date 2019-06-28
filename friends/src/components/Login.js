import React from "react";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.credentials.username}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            value={this.state.credentials.password}
          />
        </form>
      </div>
    );
  }
}

export default Login;
