import React, { Component } from 'react';
import JoinButton from './Buttons/JoinButton';
import JoinForm from './Forms/JoinForm';
import SignInButton from './Buttons/SignInButton';
import SignInForm from './Forms/SignInForm';
import './App.css';
import './Buttons/JoinButton.css';
import './Forms/JoinForm.css';
import './Buttons/SignInButton.css';
import './Forms/SignInForm.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>This is where the text will go!</p>
        <SignInButton />
        <JoinButton />
        <JoinForm />
        <SignInForm />
      </div>
    );
  }
}

export default App;
