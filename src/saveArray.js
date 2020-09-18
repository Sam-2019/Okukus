import React, { useState } from "react";

const list = [
  {
    school: "hello",
    class: "hi",
  },
];

const Save = () => {
  const [user, setUser] = useState(list);
  console.log(user);
  localStorage.setItem('file', user);
  console.log(window.localStorage);

  return <div className="body-background">Hi</div>;
};

export default Save;
