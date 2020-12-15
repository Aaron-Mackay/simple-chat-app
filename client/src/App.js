import React, { Component } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

class App extends Component {
  // Add constructor to initiate
  constructor() {
    super();
    this.state = {
      msg: "",
      username: "",
      onlineUsers: [],
      chat: [],
    };
  }

  componentDidMount() {
    socket.on("loginState", (user) => {
      // Add new messages to existing messages in "chat"
      this.setState({
        onlineUsers: [...this.state.onlineUsers, user]
      });
    });

    socket.on("disconnected", (id) => {
      // Add new messages to existing messages in "chat"
      this.setState({
        onlineUsers: [...this.state.onlineUsers].filter(x => x.id !== id)
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