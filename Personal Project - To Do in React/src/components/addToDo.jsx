/* eslint-disable react/prop-types */
// temporary

import { useState } from "react";
import "../styles/addToDo.css";

function AddToDo({ pushToDo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Inputs change the title and description
  const changeDescription = (e) => {
    (setDescription(e.target.value));
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  // handleSubmit must be a function, it pushes to main array and resets the title and description.
  const handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = {
      title: title || 'Default Title',
      description: description || 'Default Description'
    };
    pushToDo(newToDo);
    setTitle("");
    setDescription("");
  };

  return (
    // onSubmit must be on form not the button
    <form className="persistentForm" onSubmit={handleSubmit}>
      <fieldset>
        <label>Title: </label>
        <input value={title} onChange={changeTitle} />
      </fieldset>

      <fieldset>
        <label>Description: </label>
        <textarea
          value={description}
          onChange={changeDescription}
          rows="5"
          cols="30"
        ></textarea>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddToDo;
