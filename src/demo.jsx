import React from "react";
import './App.css';

export default function Home() {
  return (
    <div className="box">
      <h1>Tell me your Favourite Fruit</h1>
      {/* <label htmlFor="name" className="label">Enter Your Favourite Fruit Name</label> */}
      <input type={Text} id="name"></input>
      <br></br>
      <select id="fruit">
        <option selected disabled hidden>
          select
        </option>
        <option>Apple</option>
        <option>Banana</option>
        <option>Mango</option>
        <option>Orange</option>
        <option>Strawberry</option>
      </select>
      <button type="submit" onClick={greet}>
        submit
      </button>
    </div>
  );
}

function greet() {
  let name = document.getElementById("name").value;
  let fruit = document.getElementById("fruit").value;
  alert("Hii " + name + " Your favourite Fruit is " + fruit + " ...");
}
