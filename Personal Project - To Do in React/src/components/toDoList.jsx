/* eslint-disable react/prop-types */
// temporary

import "../styles/toDoList.css";

function ToDoList({ toDoArray }) {
  return (
    <>
      {toDoArray.map((toDo, index) => (
        <div className="toDo" key={index}>
          <h2>{toDo.title}</h2>
          <div className="description">
            <p><strong>Description:</strong></p>
            <p>{toDo.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}


export default ToDoList;
