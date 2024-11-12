import "../styles/ShoppingLayout.css";
import {useOutletContext} from 'react-router-dom'

function ShoppingLayout() {
  const products = [
    {name: "Hair Dryer", img: 'hairDryer.png'}, 
    {name: "Towel", img: 'towel.jpg'}, 
    {name: "Toothbrush", img: 'toothbrush.jpg'}];

    const updateShoppingTotal = useOutletContext();

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
                <form className="bottom">
                  <button onSubmit={() => updateShoppingTotal(e)}> Add to cart?</button>
                  <fieldset>
                    <label>amount: </label>
                    <input type="number"></input>
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
