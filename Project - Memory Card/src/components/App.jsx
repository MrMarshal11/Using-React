import { useState, useEffect } from "react";
import "../styles/App.css";
import Top from "./Top";
import Cards from "./cards";

function App() {
    // Number of times card is clicked
    let [count, setCount] = useState(0);

    const increaseCount = () => {
      setCount(count + 1)
    }
  
    const resetCountWin = () => {
      alert('You Win!');
      setCount(0);
      setCardsClicked([]);
    }

    const resetCountLose = () => {
      alert('You Lose!');
      setCount(0);
      setCardsClicked([]);
    }

    // High score functionality
    let [highScore, setHighScore] = useState(0);

    const updateHighScore = () => {
      setHighScore(count);
    }

    // Cards already clicked
    const [cardsClicked, setCardsClicked] = useState([])

    const updateCardsClicked = (newClicked) => {
      setCardsClicked(currentClicked => [...currentClicked, newClicked])
    }
  
    // Reset game
    useEffect(() => {
      console.log(count) // temporary
      count === 12 && resetCountWin(); // if count = 12, you win
      (count > highScore) && updateHighScore(); // Update high score
      console.log(cardsClicked); // temporary
      cardsClicked.length === 12 && setCardsClicked([]); // Reset cardsClicked
      if (new Set(cardsClicked).size !== cardsClicked.length) { // If duplicate cardsClicked, reset game
        resetCountLose();
      }
    } , [count])

    
  return (
    <>
      <Top 
      count={count}
      highScore={highScore}
      />
      <Cards 
      increaseCount={increaseCount}
      updateCardsClicked={updateCardsClicked}
      />
    </>
  );
}

export default App;
