import React, { Component } from 'react';
import io from "socket.io-client";
import Messenger from './components/Messenger'
import './App.css'

const socket = io.connect("http://localhost:5000");


class App extends Component {
  state = {
    msg: '',
    username: '',
    onlineUsers: '',
    chat: [],
    welcome: true
  }

  render() {
    const {
      msg,
      username,
      onlineUsers,
      chat,
      welcome } = this.state;

    return (
      <div>
        <Messenger chat={chat} username={username} welcome={welcome} />
      </div>
    );
  }
}

export default App;