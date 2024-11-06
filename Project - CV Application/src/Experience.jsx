// A section to add your educational experience (school name, title of study and date of study)
// A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)

import { useState } from "react";

function Experience() {
  const [addExperienceVisible, setAddExperienceVisible] = useState(false);

  const toggleExperience = () => {
    addExperienceVisible
      ? setAddExperienceVisible(false)
      : setAddExperienceVisible(true);
  };

  return (
    <div>
      <h3>Add Educational Experience?</h3>
      <button onClick={toggleExperience}>Add</button>
      <button>Save</button>
      <button>Remove</button>

      {addExperienceVisible && (
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
      )}
      
      {/* <form className="form">
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
      </form> */}
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

export default Experience;
