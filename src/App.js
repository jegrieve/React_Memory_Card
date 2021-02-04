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
