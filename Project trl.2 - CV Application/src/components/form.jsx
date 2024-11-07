import { useState } from "react";
import '../styles/form.css'

function Form(
    {updateFullName, updateEmail, updatePhoneNumber}
) {
    return (
        <form className="persistentForm">
            <h1>Please Fill Out This Form</h1>
            <fieldset>
                <label>Full Name:</label>
                <input onChange={updateFullName}/>
            </fieldset>

            <fieldset>
                <label>Email:</label>
                <input onChange={updateEmail}/>
            </fieldset>

            <fieldset>
                <label>Phone Number:</label>
                <input onChange={updatePhoneNumber}/>
            </fieldset>
        </form>
    )
}

export default Form;