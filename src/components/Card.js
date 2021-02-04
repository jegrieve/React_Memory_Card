import React, { useState, useEffect } from 'react';
import CardData from './CardData';

const Card = (props) => {
  let data;
  const getData = (() => {
    switch (props.id) {
      case 0:
        data = CardData[0];
        break;
      case 1:
        data = CardData[1];
        break;
      case 2:
        data = CardData[2];
        break;
      case 3:
        data = CardData[3];
        break;
      case 4:
        data = CardData[4];
        break;
      case 5:
        data = CardData[5];
        break;
      case 6:
        data = CardData[6];
        break;
      case 7:
        data = CardData[7];
        break;
      case 8:
        data = CardData[8];
        break;
      case 9:
        data = CardData[9];
        break;
      default:
        break;
    }
  })();

  const returnId = () => {
    props.getCardId(props.id);
  };

  return (
    <div className="game-card" onClick={returnId}>
      <div className="id">{data.id}</div>
      <img
        src={data.img}
        className="img"
        alt={'Picture of breed: ' + data.breed}
        width="250" /*make this 250 afterwards*/
        height="250" /*make this 250 afterwards*/
      />
      <div className="breed">{data.breed}</div>
    </div>
  );
};

export default Card;
