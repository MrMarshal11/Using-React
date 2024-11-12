import { Link } from "react-router-dom";
import "../styles/Homepage.css";

function Homepage() {
  return (
    <div className="main">
      <div className="mainInside">
      <div>
          <div className="left">
            <p>Lorem ipsum dalar sior</p>
          </div>
        </div>
        <div>
          <Link to="shopping">Click here to go to the shop</Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
