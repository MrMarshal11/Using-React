import '../styles/EducationalForm.css'

function EducationalForm({updateDateOfStudy, updateTitleOfStudy, updateSchoolName, submitEducationalExperience}) {
  return (
    <>
    <h2>Add Educational Experience?</h2>
    <form className="secondaryForm" onSubmit={submitEducationalExperience}>
      <fieldset>
        <label>School Name: </label>
        <input onChange={updateSchoolName}/>
      </fieldset>

      <fieldset>
        <label>Title of Study: </label>
        <input onChange={updateTitleOfStudy}/>
      </fieldset>

      <fieldset>
        <label>Date of Study: </label>
        <input onChange={updateDateOfStudy}/>
      </fieldset>

    </form>
    </>
  );
}

// A section to add your educational experience (school name, title of study and date of study)

export default EducationalForm;
