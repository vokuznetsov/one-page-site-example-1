import React from 'react';
import Logo from './modules/logo/Logo';
import Place from './modules/place/Place';
import VerticalLine from './components/verticle-line/VerticleLine'
import TrekDescription from './modules/trek-description/TrekDescription';

class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <div className="fluid-container">
          <div className="wrapper pb-5-per">
            <Logo />
            <Place />
            <VerticalLine />
            <TrekDescription />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
