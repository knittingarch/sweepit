import React, { Component } from 'react';
import JoinButton from './Buttons/JoinButton';
import SignInButton from './Buttons/SignInButton';
import './App.css';
import './Buttons/JoinButton.css';
import './Buttons/SignInButton.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <JoinButton />
        <SignInButton />
      </div>
    );
  }
}

export default App;
