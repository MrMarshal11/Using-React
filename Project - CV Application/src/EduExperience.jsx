import { useState } from "react";

function EduExperience() {
  const [addEduExperienceVisible, setAddEduExperienceVisible] = useState(false);

  const toggleEduExperience = () => {
    addEduExperienceVisible
      ? setAddEduExperienceVisible(false)
      : setAddEduExperienceVisible(true);
  };

  return (
    <div>
      <h3>Add Educational Experience?</h3>

      {!addEduExperienceVisible && <button onClick={toggleEduExperience}>Add</button>}

      {addEduExperienceVisible && (
        <div>
          <form className="form">
            <fieldset>
              <label>School Name: </label>
              <input />
            </fieldset>

            <fieldset>
              <label>Title of Study: </label>
              <input />
            </fieldset>

            <fieldset>
              <label>Date of Study: </label>
              <input />
            </fieldset>
          </form>
          <button onClick={toggleEduExperience}>Save</button>
          <button onClick={toggleEduExperience}>Remove</button>
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

export default EduExperience;
