import { useState, useEffect } from "react";

// redo cards.jsx (without gpt help and do it on your own now)

// on render each card should be assigned a random value
// and on click each card's value should be changed randomly again
// the grid should be assorted by the card's value via ascending order

// the state should be stored in an array containing each card's index
// when a card is clicked, the index gets added in the array
// game loss when an index is added to the array that is already there
// game win when 12 indexes are in the array.

function Cards() {
  // Create list of cards
  const cardsValue = [];

  for (let i = 0; i < 12; i++) {
    const newCardValue = Math.random();
    cardsValue.push(newCardValue);
  }

  cardsValue.sort();

  // Number of times card is clicked
  let [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    alert('You Win!');
    setCount(0);
  }

  // Reset game
  useEffect(() => {
    console.log(count) // temporary
    if (count === 12) {
      resetCount();
    }
  } , [count])

  return (
    <>
      <div className="gameboard">
        {cardsValue.map((card) => {
          return (
            <div className="card" key={crypto.randomUUID()} onClick={increaseCount}>
              <div className="imgs"></div>
              <p className="names">{card}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
