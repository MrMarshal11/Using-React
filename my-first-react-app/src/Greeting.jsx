import { useState } from 'react';
import './Greeting.css'

function Person() {
  const [person, setPerson] = useState({ firstName: "John", lastName: "Smith", age: 100 });

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  const changeFirstName = (e) => {
    setPerson({...person, firstName: e})
  }

  const changeLastName = (e) => {
    setPerson({...person, lastName: e})
  }

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <div>
      <div className='fullName'>
        <h1>{person.firstName}</h1>
        <h1>{person.lastName}</h1>
      </div>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <input id='firstName' type='text' onChange={(e) => changeFirstName(e.target.value)}></input>
      <input id='lastName' type='text' onChange={(e) => changeLastName(e.target.value)}></input>
    </div>
  );
}

export default Person;
