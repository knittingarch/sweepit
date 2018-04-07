import React, { Component } from 'react';
import axios from'axios';

import EvenOddCheckbox from './EvenOddCheckbox';
import NeighborhoodDropdown from './NeighborhoodDropdown';
import StreetDropdown from './StreetDropdown';


class StreetSelectorContainer extends Component {
  componentWillMount = () => {
    this.loadStreetsFromApi();
    this.selectedCheckboxes = new Set();
  }

  state = {
    // isSelected: false,
    streets: {},
  }

  loadStreetsFromApi = () => {
    axios.get('https://sweepthis.herokuapp.com/streets')
      .then(response => {
        let streetsResults = response.data.results;
        this.setState({ streets: streetsResults });
      })
  }

  populateStreetDropdown = () => {
    console.log('These would be streets!');
  }

  render() {

    return (
      <div className ="selector-bar">
        <NeighborhoodDropdown
          populate={ this.populateStreetDropdown }
          streetList={ this.state.streets } />
        <StreetDropdown
          streetList={ this.state.streets } />
        <EvenOddCheckbox 
          boxes={ this.selectedCheckboxes } />
      </div>
    )
  }
}

export default StreetSelectorContainer;