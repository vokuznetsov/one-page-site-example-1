import React from 'react';
import logo from './static/images/logo.png'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="section">
          <h1 className="logo">
            <a href="/">
              <img src={logo} alt='Circles Co.'></img>
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
