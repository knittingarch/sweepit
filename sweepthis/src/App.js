import React, { Component } from 'react';

import StreetSelectorContainer from './StreetSelectorContainer';
import './App.css';


class App extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  // state = {
  //   streets: {},
  //   // selectedOption: '',
  // };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    console.log('Form submitted!');
    // for (const checkbox of this.selectedCheckboxes) {
    //   console.log(checkbox, 'is selected.');
    // }
  }


  render() {

    return (
      <div className="App">
        <div>
          <form onSubmit={ this.handleFormSubmit }>
            <fieldset>
              <legend>Sweep This!</legend>
                <div id="notification-choices" className ="selector-bar">
                  <StreetSelectorContainer 
                    boxes={ this.selectedCheckboxes }/>                 
                </div>

                <div id="notification-types" className="notification-bar">
                  <label htmlFor="email">Email Me</label><input type="checkbox" name="email" id="email" />
                  <label htmlFor="text">Text Me</label><input type="checkbox" name="text" id="text" />
                  <label htmlFor="phone">Call Me</label><input type="checkbox" name="phone" id="phone" />
                </div>

                <div id="buffer-time" className="buffer-time">
                  <select name="buffer">
                    <option>1 hour</option>
                    <option>1 day</option>
                    <option>1 week</option>
                  </select>
                  <label htmlFor="buffer-time">Before Sweeping Starts</label>
                </div>

                <div className="notification-buttons">
                  <button type="button">Add to Calendar</button>
                  <input type="submit" value="Notify Me!" />
                </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
