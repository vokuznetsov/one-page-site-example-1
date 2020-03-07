import React from 'react';
import logo from './logo.svg';
import style from './style.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          "HELLO!"
        </h1>

        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </input>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
            </input>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
