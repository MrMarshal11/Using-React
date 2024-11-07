import { useState } from "react";
import "../styles/App.css";
import Form from "./form";
import CV from "./CV";
import EducationalForm from "./EducationForm";

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
      dateOfStudy: dateOfStudy
    }

    setEducationalExperience((array) => [...array, newExperience,]);
  };

  // update on input change
  // when submit, push new object into educational experience

  // figure out how to do the one below:

  // after thats done, send it to CV and then map educationalForm
  // display results in a new div

  // another thing to fix is to make the new form submits into objects not arrays

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
      </div>
      <div className="right">
        <CV
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          
          educationalExperience={educationalExperience}
        />
      </div>
    </>
  );
}

export default App;
