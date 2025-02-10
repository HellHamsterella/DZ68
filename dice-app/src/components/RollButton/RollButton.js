import React from 'react';
import './RollButton.css';

const RollButton = ({ onRoll }) => {
  return (
    <button onClick={onRoll} className="roll-button">
      Бросить кубик
    </button>
  );
};

export default RollButton;