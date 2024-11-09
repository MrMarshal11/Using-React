import PropTypes from 'prop-types';
import { useState } from 'react';

function Cards({increaseCount, updateCardsClicked}) {
  // Create list of cards and sort randomly
  const cardsValue = [];

  const [pokemonImgs, setPokemonImgs] = useState('')

  const insertPokemonImgs = (imgValue) => {
    setPokemonImgs(imgValue)
  }

  async function getData() {
    try {
    const urls = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await urls.json();
    insertPokemonImgs(data.sprites.front_default);
    }
    catch {
      console.log('error');
    }
  }

  getData();

  for (let i = 0; i < 12; i++) {
    const newCardValue = Math.random();
    cardsValue.push({randomness: newCardValue, id: i, img: pokemonImgs});
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
              <p className="names">{card.id}</p>
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
