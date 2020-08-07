export default class Button extends Component {
    render() {
      return (
        <div
          className={
            this.props.active ? "nav-item nav-link colour" : "nav-item nav-link"
          }
          onClick={this.props.onClick}
        >
          {this.props.title}
        </div>
      );
    }
  }
  
  import React, { Component } from "react";
import Button from "./Button";

export default class ButtonBar extends Component {
  state = {
    active: 0,
  };

  setActive = (i) => {
    console.log(i, this.state.active);
    this.setState({
      active: i,
    });
  };

  buttons = [
    {
      title: "Show All",
      key: 0,
      function: this.props.show_all,
    },
    {
      title: "Books",
      key: 1,
      function: this.props.show_books,
    },
    {
      title: "Bags",
      key: 2,
      function: this.props.show_bags,
    },
    {
      title: "Shoes",
      key: 3,
      function: this.props.show_shoes,
    },
    {
      title: "Clothes",
      key: 4,
      function: this.props.show_clothes,
    },
  ];

  render() {
    return (
      <div className=" bg-black text-white spin ">
        <div className="text-center py-3 categories inline">
          {this.buttons.map((button) => (
            <Button
              title={button.title}
              key={button.key}
              active={this.state.active === button.key}
              onClick={() => {
                this.setActive(button.key, button.function());
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
