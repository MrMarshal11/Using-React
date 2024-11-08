import { useState } from "react";
import "../styles/App.css";
import Form from "./form";
import CV from "./CV";
import EducationalForm from "./EducationForm";
import PracticalForm from "./PracticalForm";

// add remove and edit buttons on cv.

function App() {
  // PersistentForm
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const updateFullName = (e) => {
    setFullName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  // EducationalForm
  const [educationalExperience, setEducationalExperience] = useState([
    {
      id: crypto.randomUUID(),
      schoolName: "Griffith University Gold Coast",
      titleOfStudy: "Bachelor of Biomedical Science",
      dateOfStudy: "11 / 11 / 2003",
    },
  ]);

  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");

  const updateSchoolName = (e) => {
    setSchoolName(e.target.value);
  };

  const updateTitleOfStudy = (e) => {
    setTitleOfStudy(e.target.value);
  };

  const updateDateOfStudy = (e) => {
    setDateOfStudy(e.target.value);
  };

  // On button submit, update educational form
  const submitEducationalExperience = (e) => {
    e.preventDefault();

    const newExperience = {
      id: crypto.randomUUID(),
      schoolName: schoolName,
      titleOfStudy: titleOfStudy,
      dateOfStudy: dateOfStudy,
    };

    setEducationalExperience((array) => [...array, newExperience]);
  };

  // PracticalForm
  const [practicalExperience, setPracticalExperience] = useState([
    {
      id: crypto.randomUUID(),
      companyName: "Woolworths Surfers Paradise",
      positionTitle: "Supervisor",
      mainResponsibilities: "supervise, work the cash register etc",
      dateOfWork: "08 / 12 / 2021",
    },
  ]);

  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsibilities, setMainResponsibilities] = useState("");
  const [dateOfWork, setDateOfWork] = useState("");

  const updateCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  const updatePositionTitle = (e) => {
    setPositionTitle(e.target.value);
  };

  const updateMainResponsibilities = (e) => {
    setMainResponsibilities(e.target.value);
  };

  const updateDateOfWork = (e) => {
    setDateOfWork(e.target.value);
  };

  // On button submit, update educational form
  const submitPracticalExperience = (e) => {
    e.preventDefault();

    const newPracticalExperience = {
      id: crypto.randomUUID(),
      companyName: companyName,
      mainResponsibilities: mainResponsibilities,
      positionTitle: positionTitle,
      dateOfWork: dateOfWork,
    };

    setPracticalExperience((array) => [...array, newPracticalExperience]);
  };

  return (
    <>
      <div className="left">
        <Form
          updateFullName={updateFullName}
          updateEmail={updateEmail}
          updatePhoneNumber={updatePhoneNumber}
        />

        <EducationalForm
          updateSchoolName={updateSchoolName}
          updateTitleOfStudy={updateTitleOfStudy}
          updateDateOfStudy={updateDateOfStudy}
          submitEducationalExperience={submitEducationalExperience}
        />

        <PracticalForm 
        companyName={companyName}
        mainResponsibilities={mainResponsibilities}
        positionTitle={positionTitle}
        dateOfWork={dateOfWork}
        submitPracticalExperience={submitPracticalExperience}
        />
      </div>
      <div className="right">
        <CV
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}

          educationalExperience={educationalExperience}
          practicalExperience={practicalExperience}
        />
      </div>
    </>
  );
}

export default App;
