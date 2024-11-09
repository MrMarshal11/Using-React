import { useState, useEffect } from "react";
import "../styles/App.css";
import Top from "./Top";
import Cards from "./cards";

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
      <Top />
      <Cards />
    </>
  );
}

export default App;
