import "./styles/App.css";
import AddToDo from "./addToDo";
import ToDoList from "./toDoList";

function App() {
  return (
    <>
      <div className="left">
        <AddToDo />
      </div>
      <div className="right">
        <ToDoList />
      </div>
    </>
  );
}

export default App;
