import { useState } from "react";
import "../styles/App.css";
import Form from "./form";
import CV from "./CV";
import EducationalForm from "./EducationForm";

function App() {
  // PersistentForm
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const updateFullName = (e) => {
    setFullName(e.target.value);
  }
  
  const updateEmail = (e) => {
    setEmail(e.target.value);
  }
  
  const updatePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }

  // EducationalForm
  const [educationalExperience, setEducationalExperience] = useState([
    {schoolName: '',
      titleOfStudy: '',
      dateOfStudy: ''
    }
  ])

  const [schoolName, setSchoolName] = useState('')
  const [titleOfStudy, setTitleOfStudy] = useState('')
  const [dateOfStudy, setDateOfStudy] = useState('')

  const updateSchoolName = (e) => {
    setSchoolName(e.target.value);
  }

  const updateTitleOfStudy = (e) => {
    setTitleOfStudy(e.target.value);
  }

  const updateDateOfStudy = (e) => {
    setDateOfStudy(e.target.value);
  }

  // On button submit, update educational form
  const submitEducationalExperience = (newData) => {
    setEducationalExperience(educationalExperience => [...educationalExperience, newData]);
  }

  // update on input change
  // when submit, push new object into educational experience
  // after thats done, send it to CV and then map educationalForm 
  // display results in a new div

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
        dateOfStudy={dateOfStudy}
        schoolName={schoolName}
        titleOfStudy={titleOfStudy}        
        />
      </div>
    </>
  );
}

export default App;
