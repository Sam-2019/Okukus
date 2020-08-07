import React, { useState, Component } from "react";
import Button from "./Button";

const ButtonBar = (props) => {
  const [active, setActive] = useState(0);

  const buttons = [
    {
      title: "Show All",
      key: 0,
      function: props.show_all,
    },
    {
      title: "Books",
      key: 1,
      function: props.show_books,
    },
    {
      title: "Bags",
      key: 2,
      function: props.show_bags,
    },
    {
      title: "Shoes",
      key: 3,
      function: props.show_shoes,
    },
    {
      title: "Clothes",
      key: 4,
      function: props.show_clothes,
    },
  ];

  const Activate = (i) => {
    setActive(i);
  };

  let content = buttons.map((button) => (
    <Button
      title={button.title}
      key={button.key}
      active={active === button.key}
      onClick={() => {
        Activate(button.key, button.function());
      }}
    />
  ));
  return(<div className='gogo'>
    {content}
  </div>);
};

export default ButtonBar;
