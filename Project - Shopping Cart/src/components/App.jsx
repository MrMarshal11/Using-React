import { useState } from "react";
import Homepage from "./Homepage";
import Nav from "./Nav";
import "../styles/App.css";

function App() {
  const [shoppingTotal, setShoppingTotal] = useState(0);

  return (
    <>
      <Nav shoppingTotal={shoppingTotal}/>
      <Homepage setShoppingTotal={setShoppingTotal}/>
    </>
  );
}

export default App;
