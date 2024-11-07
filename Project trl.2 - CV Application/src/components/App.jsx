import { useState } from "react";
import "../styles/App.css";
import Form from "./form";
import CV from "./CV";

function App() {
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


  return (
    <>
      <div className="left">
        <Form 
        updateFullName={updateFullName}
        updateEmail={updateEmail}
        updatePhoneNumber={updatePhoneNumber}
        />
      </div>
      <div className="right">
        <CV 
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        />
      </div>
    </>
  );
}

export default App;
