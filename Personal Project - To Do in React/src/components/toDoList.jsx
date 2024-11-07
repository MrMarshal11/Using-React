import PropTypes from 'prop-types';
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

// Simply defining the prop types
ToDoList.propTypes = {
  toDoArray: PropTypes.array,
  removeToDo: PropTypes.func
}

export default ToDoList;
