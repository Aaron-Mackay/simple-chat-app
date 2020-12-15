import React, { Component } from "react";
import io from "socket.io-client";
import Login from "./components/Login";
import OnlineUsers from "./components/OnlineUsers";
const socket = io.connect("http://localhost:5000");

class App extends Component {
  state = {
    name: undefined,
    avatar: undefined,
    isLogged: false,
    onlineUsers: [
      {
        name: "Aaron",
        avatar: "http://www.nretnil.com/avatar/LawrenceEzekielAmos.png",
      },
      { name: "James", avatar: "http://www.nretnil.com/avatar/dino.png" },
      { name: "Elliot", avatar: "http://www.nretnil.com/avatar/barrel.jpg" },
    ],
  };

  loginForm(user) {
    const { name, avatar } = user;
    this.setState({ name, avatar, isLogged: true });
  }

  render() {
    console.log(this.state, "app");

    return (
      <div>
        {this.state.isLogged === true ? (
          <div className="chatRoom">
            <h1>Logged</h1>
            <OnlineUsers onlineUsers={this.state.onlineUsers} />
          </div>
        ) : (
          <Login loginForm={this.loginForm.bind(this)} />
        )}
      </div>
    );
  }
}

export default App;
