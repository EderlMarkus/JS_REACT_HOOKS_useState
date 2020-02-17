import React, { useState } from 'react';
import './App.css';

export default () => {
  const [value, setValue] = useState('Your Value');

  return (
    <div className="App">
      <header className="App-header">
        <h3>useState() Hook</h3>
        <p>
          Just a simple First-Time-Tryout-App where I'm playing around with
          React Hooks. Here I'm managing the state inside of a functional
          component with the useState() Hook.
        </p>
        <p>
          <input
            type="text"
            onChange={e => setValue(e.target.value)}
            placeholder={value}
          ></input>
        </p>
        <br />
        <p>Your Value is: {value}</p>
      </header>
    </div>
  );
};
