import './CV.css';

function CV({ fullName, email, phoneNumber, eduExperienceData, workExperienceData }) {
  return (
    <div>
      <div className="matchPairs">
        <h2>Name: </h2><h2>{fullName}</h2>
      </div>
      <div className="matchPairs">
        <h2>Email: </h2><h2>{email}</h2>
      </div>
      <div className="matchPairs">
        <h2>Phone Number: </h2><h2>{phoneNumber}</h2>
      </div>

      <h3>Educational Experience</h3>
      {eduExperienceData.map((edu, index) => (
        <div key={index}>
          <h4>Education {index + 1}</h4>
          <p>School Name: {edu.schoolName}</p>
          <p>Title of Study: {edu.titleOfStudy}</p>
          <p>Date of Study: {edu.dateOfStudy}</p>
        </div>
      ))}

      <h3>Work Experience</h3>
      {workExperienceData.map((work, index) => (
        <div key={index}>
          <h4>Work Experience {index + 1}</h4>
          <p>Company Name: {work.companyName}</p>
          <p>Position Title: {work.positionTitle}</p>
          <p>Main Responsibility: {work.mainResponsibility}</p>
          <p>Date Worked: {work.dateWorked}</p>
        </div>
      ))}
    </div>
  );
}

export default CV;