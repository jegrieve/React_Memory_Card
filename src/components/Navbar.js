import React, { useState, useEffect } from 'react';

const Navbar = (props) => {
  return (
    <div>
      <div>
        <span>Score: {props.newScore} </span>
        <span>High Score: {props.highScore}</span>
      </div>
    </div>
  );
};

export default Navbar;
