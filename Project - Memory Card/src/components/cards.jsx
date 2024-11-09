import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function Cards({increaseCount, updateCardsClicked}) {

  // Fetch the pokemon imgs and names
  const pokemonNames = 
  ['ho-oh', 'lugia', 'swanna', 'drifloon', 'porygon', 'turtonator', 
    'froslass', 'raikou', 'celebi', 'tyranitar', 'ampharos', 'pikachu']
  const [pokemonImgs, setPokemonImgs] = useState([])

  const insertPokemonImgs = (imgValue) => {
    setPokemonImgs(imgValue)
  }

  useEffect(() => {
    async function getData() {

      const imgs = [];

      for (let i = 0; i < 12; i++) {
      try {
      const urls = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNames[i]}`);
      const data = await urls.json();
      imgs.push({img: data.sprites.front_default, name: pokemonNames[i]});
      }
      catch {
        console.log('error');
      }}
      insertPokemonImgs(imgs)
    }
    getData();
  }, [])

  // Loading screen while fetching data
  if (pokemonImgs.length < 12) {
    return (
    <div className='load'>
      <div className='loading'>Loading...</div>;
    </div>
    )
  }

  // Create list of cards and sort randomly
  const cardsValue = [];

  for (let i = 0; i < 12; i++) {
    const newCardValue = Math.random();
    cardsValue.push({randomness: newCardValue, id: i, img: pokemonImgs[i].img, name: pokemonImgs[i].name});
  }

  cardsValue.sort((a, b) => a.randomness - b.randomness)

  return (
    <>
      <div className="gameboard">
        {cardsValue.map((card) => {
          return (
            <div 
            className="card" 
            key={crypto.randomUUID()} 
            onClick={() => {increaseCount(); updateCardsClicked(card.id);}}
            >
              <img className="imgs" src={card.img} />
              <p className="names">{card.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

Cards.propTypes = {
  increaseCount: PropTypes.func,
  updateCardsClicked: PropTypes.func
}

export default Cards;
