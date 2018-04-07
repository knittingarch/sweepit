import React, { Component } from 'react';
import axios from'axios';

import EvenOddContainer from './EvenOddContainer';
import NeighborhoodDropdown from './NeighborhoodDropdown';
import StreetDropdown from './StreetDropdown';


class StreetSelectorContainer extends Component {
  componentWillMount = () => {
    // this.loadStreetsFromApi();
    this.selectedCheckboxes = new Set();
  }

  state = {
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
    this.loadStreetsFromApi();
  }

  render() {

    return (
      <div className ="selector-bar">
        <NeighborhoodDropdown
          populate={ this.populateStreetDropdown }
          streetList={ this.state.streets } />
        <StreetDropdown
          streetList={ this.state.streets } />
        <EvenOddContainer
          boxes={ this.selectedCheckboxes } />
      </div>
    )
  }
}

export default StreetSelectorContainer;