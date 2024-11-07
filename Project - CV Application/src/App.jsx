import { useState } from "react";
import React from 'react';
import Form from './Form';
import EduExperience from './EduExperience';
import WorkExperience from './WorkExperience';
import CV from './CV';

function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [eduExperienceData, setEduExperienceData] = useState([]);
  const [workExperienceData, setWorkExperienceData] = useState([]);

  const addWorkExperienceData = (newWorkExperience) => {
    setWorkExperienceData(prevData => [...prevData, newWorkExperience]);
  }
  
  const addEduExperienceData = (newEduExperience) => {
    setEduExperienceData(prevData => [...prevData, newEduExperience]);
  }

  const changeFullName = (e) => {
    setFullName(e.target.value);
  }

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }


    return (
      <div className='main'>
        <div className='left'>
          <Form 
          fullName={fullName} changeFullName={changeFullName}
          email={email} changeEmail={changeEmail}
          phoneNumber={phoneNumber} changePhoneNumber={changePhoneNumber}
          />
          <EduExperience addEduExperienceData={addEduExperienceData}
          />
          <WorkExperience addWorkExperienceData={addWorkExperienceData}
          />
        </div>
        <div className='right'>
          <CV 
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          eduExperienceData={eduExperienceData}
          workExperienceData={workExperienceData}
          />
        </div>
      </div>
    );
  }

export default App;