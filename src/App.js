import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { Itemboxes } from "./Component/Items/Itemboxes.js";
import { Navbar } from "./Component/Navbar/Navbar";
import {Joke} from "./Component/Jokes/Joke.js";

const data = [
  { name: "Item A", price: 125 },
  { name: "Item B", price: 230 },
  { name: "Item C", price: 295 },
  { name: "Item D", price: 245 },
  { name: "Item E", price: 900 },
  { name: "Item F", price: 875 },
  { name: "Item G", price: 235 },
  { name: "Item H", price: 400 },
];

const sortData = data
  .sort((a, b) => a.price - b.price)
  .filter((item, id) => {
    return id < 5;
  });

const Test = () => {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("COLLAPSE");

  let toggle = () => {
    console.log("hello");

    setShow(!show);
    if (text === "VIEW ALL") {
      setText("COLLAPSE");
    } else setText("VIEW ALL");
  };
  return (
    <>
        <Navbar/>
        <Joke/>
      <div className="gallery">
        <button className="toggle" onClick={toggle}>
          {text}
        </button>
        {show ? (
          <div className="container">
            {sortData.map((item) => {
              return (
                <Itemboxes
                  name={item.name}
                  price={item.price}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Test;
