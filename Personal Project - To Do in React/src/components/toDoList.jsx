import "../styles/toDoList.css";

function ToDoList({ toDoArray }) {
  return (
    <>
      {toDoArray.map((toDo, index) => (
        <div className="toDo" key={index}>
          <h2>{toDo.title}</h2>
          <p>{toDo.description}</p>
        </div>
      ))}
    </>
  );
}


export default ToDoList;
