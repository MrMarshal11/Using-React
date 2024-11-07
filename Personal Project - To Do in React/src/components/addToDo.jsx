/* eslint-disable react/prop-types */
// temporary

import { useState } from "react";
import "../styles/addToDo.css";

function AddToDo( {pushToDo} ) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // Inputs change the title and description
  const changeDescription = (e) => {
    setDescription(e.target.value)
  }
  
  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

// handleSubmit must be a function, it pushes to main array and resets the title and description.
  const handleSubmit = (e) => {
    e.preventDefault();             
    pushToDo({title: title, description: description});
    setTitle('');
    setDescription('');
  }

  return (
    // onSubmit must be on form not the button
    <form className="persistentForm" onSubmit={handleSubmit}> 
      <fieldset>
        <label>Title: </label>
        <input 
        value={title}
        onChange={changeTitle}/>
      </fieldset>

      <fieldset>
        <label>Description: </label>
        <input 
        value={description}
        onChange={changeDescription}/>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddToDo;
