import React from "react";

class Thehound extends React.Component {
  constructor() {
    super();
    this.state = { name: "Sam" };
  }
  render() {
    setTimeout(() => {
      this.setState({ name: "John" });
    }, 5000);

    return <div>{this.state.name}</div>;
  }
}

export default Thehound;
