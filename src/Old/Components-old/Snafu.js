import React, { Component } from "react";

var user = {
  firstName: "Harper",
  lastName: "Perez"
};

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

class Shows extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateName = this.updateName.bind(this);
  }
  updateName() {
    this.setState({ name: user.firstName + " " + user.lastName });
  }

  handleSubmit() {
    alert("Your favorite flavor is: ");
  }

  render() {
    return (
      <div>
        <h6>Hello, {formatName(user)}!</h6>
        <h1>{this.state.name}</h1>
        <input type="submit" onClick={this.updateName} />
      </div>
    );
  }
}

export default Shows;
