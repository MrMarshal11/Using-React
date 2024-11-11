import { Link } from "react-router-dom";

function Settings() {
  return (
    <div>
      <h2>This is the settings page.</h2>
      <ul>
        <li>option 1</li>
        <li>option 2</li>
        <li>option 3</li>
        <li>option 4</li>
        <li>option 5</li>
      </ul>
      <Link to="/">Return back to main menu here</Link>
    </div>
  );
}

export default Settings;
