import "../styles/ShoppingLayout.css";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function ShoppingLayout() {
  const products = [
    { name: "Hair Dryer", img: "hairDryer.png" },
    { name: "Towel", img: "towel.jpg" },
    { name: "Toothbrush", img: "toothbrush.jpg" },
  ];

  const [value, setValue] = useState(0);

  const setShoppingTotal = useOutletContext();

  const updateShoppingTotal = (amount) => {
    let numAmount = parseInt(amount)
    setShoppingTotal((prevTotal) => (prevTotal + numAmount));
    setValue(0);
  };

  const handleQuantityChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="main">
      <div className="mainInside2">
        {products.map((product) => {
          return (
            <div className="insideTemplate" key={crypto.randomUUID()}>

              <div className="top">
                <p>{product.name}</p>
              </div>

              <img src={product.img} className="mid"></img>

              <form className="bottom" onSubmit={(e) => {
                e.preventDefault();
                updateShoppingTotal(value)
                }}>

                <button type="submit">
                  Add to cart?
                </button>

                <fieldset>
                  <label>amount: </label>
                  <input type="number" onChange={handleQuantityChange} value={value}></input>
                </fieldset>
              </form>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingLayout;
