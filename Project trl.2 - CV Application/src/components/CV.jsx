import "../styles/CV.css";

function CV({
  fullName,
  email,
  phoneNumber,

  educationalExperience,
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
    </>
  );
}

export default CV;
