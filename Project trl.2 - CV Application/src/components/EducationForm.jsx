import "../styles/secondaryForms.css";

function EducationalForm({
  updateDateOfStudy,
  updateTitleOfStudy,
  updateSchoolName,
  submitEducationalExperience,
}) {
  return (
    <>
      <form className="secondaryForm" onSubmit={submitEducationalExperience}>
        <h2>Add Educational Experience?</h2>

        <fieldset>
          <label>School Name: </label>
          <input onChange={updateSchoolName} />
        </fieldset>

        <fieldset>
          <label>Title of Study: </label>
          <input onChange={updateTitleOfStudy} />
        </fieldset>

        <fieldset>
          <label>Date of Study: </label>
          <input onChange={updateDateOfStudy} />
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default EducationalForm;
