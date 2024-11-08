import "../styles/CV.css";

function CV({
  fullName,
  email,
  phoneNumber,

  educationalExperience,
  practicalExperience
}) {
  return (
    <>
      <div className="field">
        <h2>Name: {fullName}</h2>
        <h3>Email: {email}</h3>
        <h3>Phone Number: {phoneNumber}</h3>
      </div>

      {educationalExperience.map((arr) => {
        return (
          <div className="field" key={arr.id}>
            <h2>Temp. Educational Experience Title</h2>
            <h3>School Name: {arr.schoolName}</h3>
            <h3>Title of Study: {arr.titleOfStudy}</h3>
            <h3>Date of Study: {arr.dateOfStudy}</h3>
          </div>
        );
      })}
      
      {practicalExperience.map((arr) => {
        return (
          <div className="field" key={arr.id}>
            <h2>Temp. Practical Experience Title</h2>
            <h3>Company Name: {arr.companyName}</h3>
            <h3>Position Title: {arr.positionTitle}</h3>
            <h3>Main Responsibilities: {arr.mainResponsibilities}</h3>
            <h3>Date of Work: {arr.dateOfWork}</h3>
          </div>
        );
      })}
    </>
  );
}

export default CV;
