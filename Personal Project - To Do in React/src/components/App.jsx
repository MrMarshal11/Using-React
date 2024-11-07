import { useState } from "react";
import "../styles/App.css";
import AddToDo from "./addToDo";
import ToDoList from "./toDoList";

function App() {
  // Main 'State' containing all to do arrays
  const [toDoArray, setToDoArray] = useState([{id: crypto.randomUUID(), title: 'First List', description: 'List description is here'}]);

  // Add new to do
  const pushToDo = (newToDo) => {
    const toDoWithId = { ...newToDo, id: crypto.randomUUID() };
    setToDoArray(array => [...array, toDoWithId])
  }

  const removeToDo = (id) => {
    setToDoArray((array) => array.filter((toDo) => toDo.id !== id))
  }

  return (
    <>
      <div className="left">
        {/* Give child add to do function */}
        <AddToDo pushToDo={pushToDo}/> 
      </div>
      <div className="right">
        {/* Give this child the to do arrays */}
        <ToDoList toDoArray={toDoArray} removeToDo={removeToDo}/>
      </div>
    </>
  );
}

export default App;
