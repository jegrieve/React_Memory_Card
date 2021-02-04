import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CardContainer from './components/CardContainer';

const App = () => {
  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  return (
    <div>
      <CardContainer shuffle={shuffle} />
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
