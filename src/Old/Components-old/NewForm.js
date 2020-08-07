import React, { Component } from "react";

function formalert() {
  return (
    <div class="container col-md-6" style={{ padding: "1em 6em 0em 6em" }}>
      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Well done!</h4>
        <p class="mb-0">
          Aww yeah, you have successfully signup for the Polling App.
          <br />
          Below are your log in details
        </p>
      </div>
    </div>
  );
}

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", passWord: "" };
    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  formSubmit() {
    alert(
      "Your favorite is " + " " + this.state.value + " " + this.state.value
    );
  }

  render() {
    return (
      <div>
        <div class="container col-md-5">
          <h1>Sign Up</h1>
          <div class="row">
            <div class="col">
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Username"
                    class="form-control"
                    name="userName"
                    value={this.state.string}
                    onChange={this.handleChange}
                  />{" "}
                </div>

                <div class="form-group">
                  <input
                    type="Password"
                    placeholder="Password"
                    class="form-control"
                    name="passWord"
                    value={this.state.string}
                    onChange={this.handleChange}
                  />{" "}
                </div>

                <button
                  class="btn btn-primary mb-3"
                  type="submit"
                  onClick={this.formSubmit}
                >
                  Log in
                </button>
              </form>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default NewForm;
