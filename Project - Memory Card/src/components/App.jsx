import { useState } from "react";
import "../styles/App.css";

// on render each card should be assigned a random value
// and on click each card's value should be changed randomly again
// the grid should be assorted by the card's value via ascending order

// the state should be stored in an array containing each card's index
// when a card is clicked, the index gets added in the array
// game loss when an index is added to the array that is already there
// game win when 12 indexes are in the array.

function App() {
  return (
    <>
      <div className="top">
        <div className="top-left">
          <h1>Memory Game</h1>
          <h2>
            Get points by clicking on an image but don't click on any more than
            once!
          </h2>
        </div>
        <div className="top-right">
          <h4>Score: </h4>
          <h4>High Score: </h4>
        </div>
      </div>
      <div className="gameboard">
        <div className="card">
          <div className="imgs"></div>
          <p className="names">demo name</p>
        </div>
        <div className="card">
          <div className="imgs"></div>
          <p className="names">demo name</p>
        </div>
        <div className="card">
          <div className="imgs"></div>
          <p className="names">demo name</p>
        </div>
        <div className="card">
          <div className="imgs"></div>
          <p className="names">demo name</p>
        </div>
        <div className="card">
          <div className="imgs"></div>
          <p className="names">demo name</p>
        </div>
        <div className="card">
          <div className="imgs"></div>
          <p className="names">demo name</p>
        </div>
        <div className="card">
          <div className="imgs"></div>
          <p className="names">demo name</p>
        </div>
        <div className="card">
          <div className="imgs"></div>
          <p className="names">demo name</p>
        </div>
        <div className="card">
          <div className="imgs"></div>
          <p className="names">demo name</p>
        </div>
        <div className="card">
          <div className="imgs"></div>
          <p className="names">demo name</p>
        </div>
        <div className="card">
          <div className="imgs"></div>
          <p className="names">demo name</p>
        </div>
        <div className="card">
          <div className="imgs"></div>
          <p className="names">demo name</p>
        </div>
      </div>
    </>
  );
}

export default App;
