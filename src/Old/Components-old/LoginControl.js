import React from "react";

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = React.createElement(LogoutButton, {
        onClick: this.handleLogoutClick
      });
    } else {
      button = React.createElement(LoginButton, {
        onClick: this.handleLoginClick
      });
    }
    return React.createElement(
      "div",
      null,
      React.createElement(Greeting, { isLoggedIn: isLoggedIn }),
      button
    );
  }
}
function UserGreeting(props) {
  return React.createElement("h1", null, "Welcome back!");
}

function GuestGreeting(props) {
  return React.createElement("h1", null, "Please sign up.");
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return React.createElement(UserGreeting, null);
  }
  return React.createElement(GuestGreeting, null);
}

function LoginButton(props) {
  return React.createElement("button", { onClick: props.onClick }, "Login");
}
function LogoutButton(props) {
  return React.createElement("button", { onClick: props.onClick }, "Logout");
}

export default LoginControl;
