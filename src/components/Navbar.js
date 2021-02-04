import React, { useState, useEffect } from 'react';

const Navbar = (props) => {
  const [highScore, setHighScore] = useState(0);
  const [placeHolderScore, setPlaceHolderScore] = useState(0);

  useEffect(() => {
    if (props.newScore > placeHolderScore) {
      setPlaceHolderScore(props.newScore);
    } else if (placeHolderScore > highScore && props.newScore === 0) {
      setHighScore(placeHolderScore);
    }
  });

  return (
    <div className="navbar">
      <div>
        <span>Score: {props.newScore} </span>
        <span>High Score: {highScore}</span>
      </div>
    </div>
  );
};

export default Navbar;
