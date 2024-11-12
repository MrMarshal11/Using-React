import { Link } from "react-router-dom";
import "../styles/Nav.css"

function Nav({shoppingTotal}) {
  return (
    <nav>
      <div className="topLeft">
        <img src="react.svg"></img>
        <Link to="/home">Home</Link>
        <Link to="/shopping">Shop</Link>
      </div>
      <div className="topRight">
        <img src="cart.svg"></img>
        <p>{shoppingTotal}</p>
        <button>Checkout?</button>
      </div>
    </nav>
  );
}

export default Nav;