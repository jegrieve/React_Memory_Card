import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CardContainer from './components/CardContainer';

const App = () => {
  const [highScore, setHighScore] = useState(0);
  const [newScore, setNewScore] = useState(0);

  return (
    <div>
      <Navbar highScore={highScore} newScore={newScore} />
      <CardContainer />
    </div>
  );
};

export default App;

//Plan for the app:

//component for whole app, has high score and new* score
//component to display score
//component that will take in random values in an array 1-10 ex: [1,5,3,7,4,8,9,2,6,10]
//this same component will then display the compoenents by this random order, once clicked it will then
//setstate of parent app...
