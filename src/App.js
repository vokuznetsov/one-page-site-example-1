import React from 'react';
import Logo from './modules/Logo';


class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <div className="fluid-container">
          <div className="row wrapper">
            <Logo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
