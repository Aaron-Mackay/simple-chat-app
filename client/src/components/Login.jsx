import React, { Component } from "react";

class Login extends Component {
  state = {
    name: "",
    avatar: "",
  };

  handleChange = (event) => {
    console.log(this.props, "props");
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { loginForm } = this.props;
    event.preventDefault();
    loginForm(this.state);
  };
  render() {
    console.log(this.state.name, "name");
    console.log(this.state.avatar, "avatar");
    console.log(this.state, "all");
    return (
      <div className="LogIForm">
        <h1>Join to Chat </h1>
        <form className="newChatter" onSubmit={this.handleSubmit}>
          <label htmlFor="name"> Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="name"
            required
          />

          <label htmlFor="avatar"> Avatar: </label>
          <input
            type="url"
            name="avatar"
            id="avatar"
            min="0"
            onChange={this.handleChange}
            value={this.state.avatar}
            placeholder="url"
          />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}
export default Login;
