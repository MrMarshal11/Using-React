import "./styles/addToDo.css";

function AddToDo() {
  return (
    <form className="persistentForm">
      <formfield>
        <label>Title: </label>
        <input />
      </formfield>

      <formfield>
        <label>Description: </label>
        <input />
      </formfield>

      <button>Submit</button>
    </form>
  );
}

export default AddToDo;
