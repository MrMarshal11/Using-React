import { useState } from 'react';
import './Greeting.css'

function Demo() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <img src="/demographics.png" alt="elderly demographics"></img>
      <form>
        <label htmlFor='random-input'>enter age here:</label>
        <input 
        id='random-input' 
        type='number' 
        value={inputValue}
        onChange={(event) => (inputValue === -1 ? setInputValue(1) : setInputValue(event.target.value - 1))}
        ></input>
      </form>
      <h1>Elderly demographics and img test</h1>
    </div>
  );
}

export default Demo;
