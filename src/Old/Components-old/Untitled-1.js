import React, { Component } from "react";

  /*formSubmit()  { if (this.state.userName = '') {
    alert('Your name is: ' );} 
    else {alert('Your name' + this.state.name +  this.state.passcode);}
    }
*/


function alert() {
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

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePasscode = this.handleChangePasscode.bind(this);
    this.formSubmit = this.formSubmit.bind(this);

    this.state = { 
        name: "", 
        passcode: "" };
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value});
  }

  handleChangePasscode(e) {
    this.setState({ passcode:  e.target.value });
  }

  formSubmit() {

    alert("Your name ");

  
  }
  

  render() {
    return (
      <div>
        <div class="container col-md-5">
          <h1>Sign Up</h1>
          <div class="row">
            <div class="col">
              <form onSubmit={this.formSubmit}>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Username"
                    class="form-control"
                    name="userName"
                    value={this.state.name}
                    onChange={this.handleChangeName}
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Password"
                    class="form-control"
                    name="passWord"
                    value={this.state.passcode}
                    onChange={this.handleChangePasscode}
                  />{" "}
                </div>

                <button class="btn btn-primary"
                 type="submit">
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewForm;
