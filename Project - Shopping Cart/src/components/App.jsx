import {Outlet, useLocation} from 'react-router-dom'
import { useState } from "react";
import Homepage from "./Homepage";
import Nav from "./Nav";
import "../styles/App.css";

function App() {
  const [shoppingTotal, setShoppingTotal] = useState(0);
  const updateShoppingTotal = (e) => {
    e.preventDefault();
    setShoppingTotal(e.target.value);
  } 

  const location = useLocation();

  return (
    <>
      <Nav shoppingTotal={shoppingTotal}/>
      <Outlet context={updateShoppingTotal}/>
      {location.pathname === '/' && <Homepage />}
    </>
  );
}

export default App;