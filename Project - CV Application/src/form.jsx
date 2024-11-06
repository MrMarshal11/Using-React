// A section to add general information like name, email and phone number.
// A section to add your educational experience (school name, title of study and date of study)
// A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)

import { useState } from "react";
import './form.css'

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

        {/* Add Educational Experience? h3 and Add Professional Experience h3

        and a button underneath that disappears when clicked (saying yes for now)

        and a save button shows up instead along with the formfield 

        and a remove button also shows up and disappears when clicked along with the formfield that persists unless clicked
        
         */}
      </form>
    </div>
  );
}

export default Form;
