import React, { useState, Component } from "react";
import All from "./all";
import Bags from "./bags";
import Books from "./books";
import Clothes from "./clothes";
import Shoes from "./shoes";
import ButtonBar from './ButtonBar'
import ButtonBar_hook from './ButtonBar_hook'

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

  return (
    <>
      <div className=" bg-black text-white spin ">
        <div className="text-center py-3 categories">
          <button className=" button button-view" onClick={show_all}>
            Show all
          </button>
          <button className=" button button-view" onClick={show_books}>
            Books
          </button>
          <button className="button button-view" onClick={show_bags}>
            Bags
          </button>
          <button className="button button-view" onClick={show_shoes}>
            Shoes
          </button>
          <button className="button button-view" onClick={show_clothes}>
            Clothes
          </button>
        </div>

<ButtonBar_hook show_all={show_all} show_books={show_books} show_bags={show_bags} show_shoes={show_shoes}
        show_clothes={show_clothes}
        />

        <div className="p-3 item">
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
