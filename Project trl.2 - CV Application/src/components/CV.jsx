import "../styles/CV.css";

function CV({fullName, email, phoneNumber}) {
  return (
    <div>
      <h2>Name: {fullName}</h2>
      <h3>Email: {email}</h3>
      <h3>Phone Number: {phoneNumber}</h3>
    </div>
  );
}

export default CV;
