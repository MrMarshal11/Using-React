import { useState } from "react";

function WorkExperience() {
  const [addWorkExperienceVisible, setAddWorkExperienceVisible] =
    useState(false);

  const toggleWorkExperience = () => {
    addWorkExperienceVisible
      ? setAddWorkExperienceVisible(false)
      : setAddWorkExperienceVisible(true);
  };

  return (
    <div>
      <h3>Add Work Experience?</h3>

      {!addWorkExperienceVisible && (
        <button onClick={toggleWorkExperience}>Add</button>
      )}

      {addWorkExperienceVisible && (
        <div>
          <form className="form">
            <fieldset>
              <label>Company Name: </label>
              <input />
            </fieldset>

            <fieldset>
              <label>Position Title: </label>
              <input />
            </fieldset>

            <fieldset>
              <label>Main Responsibility of Your Job: </label>
              <input />
            </fieldset>

            <fieldset>
              <label>Date Worked (From and Until): </label>
              <input />
            </fieldset>
          </form>
          <button onClick={toggleWorkExperience}>Save</button>
          <button onClick={toggleWorkExperience}>Remove</button>
        </div>
      )}
    </div>
  );
}

{
  /* Add Educational Experience? h3 and Add Professional Experience h3

        and a button underneath that disappears when clicked (saying yes for now)

        and a save button shows up instead along with the formfield 

        and a remove button also shows up and disappears when clicked along with the formfield that persists unless clicked

         */
}

export default WorkExperience;
