import React, { Component } from 'react';

import BufferTimeContainer from './BufferTimeContainer';
import Button from './Button';
import NotificationContainer from './NotificationContainer';
import StreetSelectorContainer from './StreetSelectorContainer';
import './App.css';

class App extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
    this.selectedNotificationCheckboxes = new Set();
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
                <div id="notification-choices">
                  <StreetSelectorContainer 
                    boxes={ this.selectedCheckboxes }/>                 
                </div>

                <div id="notification-types" className="notification-bar">
                  <NotificationContainer 
                    boxes={ this.selectedNotificationCheckboxes } />
                </div>

                <div id="buffer-time" className="buffer-time">
                  <BufferTimeContainer />
                </div>

                <div className="notification-buttons">
                  <Button
                    type="button"
                    value="Add to Calendar" />
                  <Button
                    type="submit"
                    value="Notify Me!" />
                </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
