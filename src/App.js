import React from 'react';
import Logo from './modules/Logo';
import Place from './modules/Place';


class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <div className="fluid-container">
          <div className="wrapper pb-5-per">
            <Logo />
            <Place />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
