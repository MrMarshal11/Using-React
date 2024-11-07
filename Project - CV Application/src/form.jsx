import './Form.css'

function Form({changeFullName, changeEmail, changePhoneNumber}) {
  return (
    <div>
      <h1>Please Fill out this form</h1>
      <form className="form">
        <fieldset>
            <label>Full Name: </label>
            <input onChange={changeFullName} />
        </fieldset>

        <fieldset>
            <label>Email: </label>
            <input type="email" onChange={changeEmail}/>
        </fieldset>

        <fieldset>
            <label>Phone Number: </label>
            <input onChange={changePhoneNumber}/>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
