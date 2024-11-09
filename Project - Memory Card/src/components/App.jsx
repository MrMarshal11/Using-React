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
  
    const resetCount = () => {
      alert('You Win!');
      setCount(0);
    }
  
    // Reset game
    useEffect(() => {
      console.log(count) // temporary
      count === 12 && resetCount(); // if count = 12, you win
    } , [count])

    
  return (
    <>
      <Top 
      count={count}
      />
      <Cards 
      increaseCount={increaseCount}
      />
    </>
  );
}

export default App;
