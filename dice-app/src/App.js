import React, { useState } from 'react';
import Dice from './components/Dice/Dice';
import RollButton from './components/RollButton/RollButton';
import './App.css';

function App() {
  const [value, setValue] = useState(1);

  const rollDice = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setValue(randomValue);
  };

  return (
    <div className="App">
      <h1>Игральная кость</h1>
      <Dice value={value} />
      <RollButton onRoll={rollDice} />
    </div>
  );
}

export default App;