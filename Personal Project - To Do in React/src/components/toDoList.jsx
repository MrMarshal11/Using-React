/* eslint-disable react/prop-types */
// temporary

import "../styles/toDoList.css";

function ToDoList({ toDoArray, removeToDo }) {
  return (
    <>
      {toDoArray.map((toDo) => (
        <div className="toDo" key={toDo.id}>
          <h2>{toDo.title}</h2>
          <div className="description">
            <p>
              <strong>Description:</strong>
            </p>
            <p>{toDo.description}</p>
          </div>
          <button onClick={() => removeToDo(toDo.id)}>Remove</button>
        </div>
      ))}
    </>
  );
}

export default ToDoList;
