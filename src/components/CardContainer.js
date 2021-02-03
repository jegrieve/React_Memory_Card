import React, { useState, useEffect } from 'react';
import Card from './Card';
const CardContainer = () => {
  return (
    <div>
      <Card id={0} />
    </div>
  );
  //Based on random data array [1...10] from app.js, I will loop through (also make sure to give uniqid)
  //the array and create a card for each of these items based on the number (id)
  //I will use this id to pick the appropriate data from a CardData component(just an array with obj data)
};

export default CardContainer;
