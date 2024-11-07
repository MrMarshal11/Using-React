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
      <div>
        <h2>Name: {fullName}</h2>
        <h3>Email: {email}</h3>
        <h3>Phone Number: {phoneNumber}</h3>
      </div>

      {educationalExperience.map((arr) => {
        return (
          <div key={arr.id}>
            <h2>Temp. Educational Experience Title</h2>
            <h3>{arr.schoolName}</h3>
            <h3>{arr.titleOfStudy}</h3>
            <h3>{arr.dateOfStudy}</h3>
          </div>
        );
      })}
      
      {practicalExperience.map((arr) => {
        return (
          <div key={arr.id}>
            <h2>Temp. Practical Experience Title</h2>
            <h3>{arr.companyName}</h3>
            <h3>{arr.positionTitle}</h3>
            <h3>{arr.mainResponsibilities}</h3>
            <h3>{arr.dateOfWork}</h3>
          </div>
        );
      })}
    </>
  );
}

export default CV;
