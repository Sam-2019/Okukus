import React, { useState, useEffect, Component } from "react";
import All from "./all";
import Bags from "./bags";
import Books from "./books";
import Clothes from "./clothes";
import Shoes from "./shoes";
import ButtonBar from "./ButtonBar";
import Carousel from "./Carousel/Carousel";
import data from "../files/data";

import "./body.css";

const Body = () => {
  const [active, setActive] = useState("allProducts");

  const allProducts = active === "allProducts";
  const books = active === "books";
  const bags = active === "bags";
  const shoes = active === "shoes";

  function show_all() {
    setActive("allProducts");
  }

  function show_books() {
    setActive("books");
  }

  function show_bags() {
    setActive("bags");
  }

  function show_shoes() {
    setActive("shoes");
  }

  function show_clothes() {
    setActive("clothes");
  }

  useEffect(() => {
    fetch(`https://okukus.com/script/major_payn.php`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <>
      <div className="">
        <Carousel />
        <div className="text-center p-3 categories" hidden>
          <ButtonBar
            show_all={show_all}
            show_books={show_books}
            show_bags={show_bags}
            show_shoes={show_shoes}
            show_clothes={show_clothes}
          />
        </div>

        <div className="p-1 body-background">
          {allProducts ? (
            <All />
          ) : books ? (
            <Books />
          ) : bags ? (
            <Bags />
          ) : shoes ? (
            <Shoes />
          ) : (
            <Clothes />
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
