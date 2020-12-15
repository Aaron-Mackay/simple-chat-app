import React, { Component } from "react";
import io from "socket.io-client";
import Login from "./components/Login";

const socket = io.connect("http://localhost:5000");

class App extends Component {
  state = {
    name: undefined,
    avatar: undefined,
  };

  loginForm(user) {
    const { name, avatar } = user;

    this.setState({ name, avatar });
  }

  render() {
    console.log(this.state, "app");

    return (
      <div>
        {this.state.loggedIn === true ? (
          <h1>Logged</h1>
        ) : (
          <Login loginForm={this.loginForm.bind(this)} />
        )}
      </div>
    );
  }
}

export default App;
