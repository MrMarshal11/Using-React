// A section to add general information like name, email and phone number.

import { useState } from "react";
import './Form.css'

function Form() {
  return (
    <div>
      <form className="form">
        <fieldset>
            <label>Full Name: </label>
            <input />
        </fieldset>

        <fieldset>
            <label>Email: </label>
            <input type="email"/>
        </fieldset>

        <fieldset>
            <label>Phone Number: </label>
            <input />
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
