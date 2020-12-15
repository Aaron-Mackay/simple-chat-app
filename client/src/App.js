import React, { Component } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

class App extends Component {
  // Add constructor to initiate
  constructor() {
    super();
    this.state = {
      msg: "",
      name: undefined,
      onlineUsers: [],
      chat: [],
      avatar: undefined,
      loggedIn: false,
    };
  }

  componentDidMount() {
    socket.on("loginState", (user) => {
      // Add new user to onlineUsers
      this.setState({
        onlineUsers: [...this.state.onlineUsers, user]
      });
    });

    socket.on("disconnected", (id) => {
      // Remove user from onlineUsers
      this.setState({
        onlineUsers: [...this.state.onlineUsers].filter(x => x.id !== id)
      });
    });

    socket.on("chat message", ({ id, msg }) => {
      // Add new messages to existing messages in "chat"
      this.setState({
        chat: [...this.state.chat, { id, msg }]
      });
    });
  }

  // insert setStates
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;