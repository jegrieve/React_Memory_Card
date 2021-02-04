import React, { useState, useEffect } from 'react';
import Card from './Card';
import Navbar from './Navbar.js';
const CardContainer = (props) => {
  const [currentPicks, setCurrentPicks] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [newScore, setNewScore] = useState(0);
  const shuffledCards = props.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const getCardId = (id) => {
    setCurrentPicks([...currentPicks, id]);
    console.log(currentPicks);
  };
  //So, I add an event listener on each card that will return its ID
  //I will take this id check the array and if its not picked then I will update the score Note: highscore only updated when lose/win
  //Keep going until:
  //1. Array.length === 10, u win, replay
  //2. You pcik an id already in the array, you lose but try again
  //3. On all tries you keep the navbar with the highscore but u update own cardcontainer score.
  return (
    <div>
      <Navbar highScore={highScore} newScore={newScore} />
      {shuffledCards.map((id, i) => {
        return (
          <div key={i}>
            {' '}
            {/* change i to uniqID*/}
            <Card id={id} getCardId={getCardId} />
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
