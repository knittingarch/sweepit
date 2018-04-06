import React, { Component } from 'react';

// import Checkbox from './Checkbox';
import StreetSelectorContainer from './StreetSelectorContainer';
import './App.css';
import './Forms/StreetSelectorForm.css';


class App extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  // state = {
  //   streets: {},
  //   // selectedOption: '',
  // };

  // loadStreetsFromApi = () => {
  //   axios.get('https://sweepthis.herokuapp.com/streets')
  //     .then(response => {
  //       let streetsResults = response.data.results;
  //       this.setState({ streets: streetsResults });
  //     })
  // }

  // How is this working?
  // handleChange = (selectedOption) => {
  //   this.setState({ selectedOption });
  //   console.log(`Selected: ${selectedOption.label}`);
  // }

  // // Create the checkbox components
  // createCheckbox = label => (
  //   <Checkbox
  //           label={label}
  //           handleCheckboxChange={this.toggleCheckbox}
  //           key={label}
  //       />
  // )

  // // Get data based on even / odd selection
  // toggleCheckbox = label => {
  //   if (this.selectedCheckboxes.has(label)) {
  //     this.selectedCheckboxes.delete(label);
  //   } else {
  //     this.selectedCheckboxes.add(label);
  //   }
  // }
  
  // // Create the various checkboxes based on lists of strings
  // createStreetSideCheckboxes = () => (
  //   streetSides.map(this.createCheckbox)
  // )

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }


  render() {
    // const { selectedOption } = this.state;
    // const value = selectedOption && selectedOption.value;

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
