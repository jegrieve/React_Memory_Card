import React, { useState, useEffect } from 'react';
import Card from './Card';
import Navbar from './Navbar.js';
const CardContainer = (props) => {
  const [currentPicks, setCurrentPicks] = useState([]);
  const [newScore, setNewScore] = useState(0);
  let shuffledCards = props.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const getCardId = (id) => {
    setCurrentPicks([...currentPicks, id]);
  };

  useEffect(() => {
    if (currentPicks.length === 0) return;
    let copiedPicks = Array.from(currentPicks);
    let latestNum = copiedPicks.pop();
    if (copiedPicks.indexOf(latestNum) === -1) {
      setNewScore(newScore + 1);
    } else {
      setNewScore(0);
    }
  }, [currentPicks]);

  return (
    <div>
      <Navbar newScore={newScore} />
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
