import React, { Component } from 'react';
import axios from'axios';
import Neighborhood from './Neighborhood';
import Street from './Street';
import './App.css';
import './Forms/StreetSelectorForm.css';


class App extends Component {

  state = {
    streets: {},
    selectedOption: '',
  };

  loadStreetsFromApi = () => {
    axios.get('https://sweepthis.herokuapp.com/streets')
      .then(response => {
        let streetsResults = response.data.results;
        this.setState({ streets: streetsResults });
      })
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <div className="App">
        <div>
          <form>
            <fieldset>
              <legend>Sweep This!</legend>
                <div id="notification-choices" className ="selector-bar">
                  <input list="neighborhoods" onClick={ this.loadStreetsFromApi } placeholder="Choose neighborhood..." />
                  <datalist id="neighborhoods">
                    { Object.keys(this.state.streets).map( key => 
                      <option><Neighborhood key={ key } details={ this.state.streets[key] } /></option>)}
                  </datalist>

                  <input list="streets" placeholder="Choose streets..." />
                  <datalist id="streets">
                    { Object.keys(this.state.streets).map( key => 
                      <option><Street key={ key } details={ this.state.streets[key] } /></option>)}
                  </datalist>

                  <div className="street-side">
                    <input type="checkbox" name="even" id="even" /><label htmlFor="even">Even</label>
                    <input type="checkbox" name="odd" id="odd" /><label htmlFor="odd">Odd</label>
                  </div>
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
                  <input onClick={ this.handleChange } type="submit" value="Notify Me!" />
                </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
