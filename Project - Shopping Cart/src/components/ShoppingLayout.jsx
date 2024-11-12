import "../styles/ShoppingLayout.css";

function ShoppingLayout() {
  const products = [
    {name: "Hair Dryer", img: 'hairDryer.png'}, 
    {name: "Towel", img: 'towel.jpg'}, 
    {name: "Toothbrush", img: 'toothbrush.jpg'}];

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
                  <button>Add to cart?</button>
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
