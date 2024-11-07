import { useState } from "react";
import "../styles/App.css";
import AddToDo from "./addToDo";
import ToDoList from "./toDoList";

function App() {
  // Main 'State' containing all to do arrays
  const [toDoArray, setToDoArray] = useState([{title: 'poo', description: 'lfdaf sdfagmsavsv vfdjs'}]);

  // Add new to do
  const pushToDo = (newToDo) => {
    setToDoArray(array => [...array, newToDo])
  }

  return (
    <>
      <div className="left">
        {/* Give child add to do function */}
        <AddToDo pushToDo={pushToDo}/> 
      </div>
      <div className="right">
        {/* Give this child the to do arrays */}
        <ToDoList toDoArray={toDoArray}/>
      </div>
    </>
  );
}

export default App;
