import React, { Component } from 'react';
import axios from'axios';
import GetDataButton from './Buttons/GetDataButton';
import Street from './Street';
import './App.css';
import './Buttons/GetDataButton.css';


class App extends Component {

  state = {
    streets: {}
  };

  loadStreetsFromApi = () => {
    axios.get('https://sweepthis.herokuapp.com/streets')
      .then(response => {
        let streetsResults = response.data.results;
        this.setState({ streets: streetsResults });
      })
  }

  render() {
    return (
      <div className="App">
        <GetDataButton 
          loaded={ this.loadStreetsFromApi }/>
        <div>
          {Object.keys(this.state.streets).map( key => 
            <Street key={ key } details={ this.state.streets[key] } />)}
        </div>
      </div>
    );
  }
}

export default App;
