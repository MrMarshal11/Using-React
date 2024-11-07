import "../styles/secondaryForms.css";

function PracticalForm({
    updateCompanyName,
    updateMainResponsibilities,
    updatePositionTitle,
    updateDateOfWork,
    submitPracticalExperience
}) {
  return (
    <>
      <form className="secondaryForm" onSubmit={submitPracticalExperience}>
        <h2>Add Educational Experience?</h2>

        <fieldset>
          <label>Company Name: </label>
          <input onChange={updateCompanyName} />
        </fieldset>

        <fieldset>
          <label>Main Responsibilities: </label>
          <input onChange={updateMainResponsibilities} />
        </fieldset>

        <fieldset>
          <label>Position Title: </label>
          <input onChange={updatePositionTitle} />
        </fieldset>

        <fieldset>
          <label>Date Of Work: </label>
          <input onChange={updateDateOfWork} />
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default PracticalForm;
