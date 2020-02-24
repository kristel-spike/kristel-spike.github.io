import React from 'react';
//import logo from './logo.svg';
import logo from './kristel.JPG';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Kristel and I'm going to try my best to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/kristel-spike"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
