import PropTypes from 'prop-types';

function Top({count, highScore}) {
  return (
    <div className="top">
      <div className="top-left">
        <h1>Memory Game</h1>
        <h2>
          Get points by clicking on an image but don't click on any more than
          once!
        </h2>
      </div>
      <div className="top-right">
        <h4>Score: {count}</h4>
        <h4>High Score: {highScore}</h4>
      </div>
    </div>
  );
}

Top.propTypes = {
  count: PropTypes.number,
  highScore: PropTypes.number
}

export default Top;
