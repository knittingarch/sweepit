import React, { Component } from 'react';
import Checkbox from './Checkbox';

const streetSides = [
  'even',
  'odd',
];

const EvenOddCheckbox = (props) => {

// class EvenOddCheckbox extends Component {
//   componentWillMount = () => {
//     this.selectedCheckboxes = new Set();
//   }

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
  
  //   toggleCheckbox = label => {
  //     if (this.selectedCheckboxes.has(label)) {
  //       this.selectedCheckboxes.delete(label);
  //     } else {
  //       this.selectedCheckboxes.add(label);
  //     }
  //   }

  //   // Create the various checkboxes based on lists of strings
  //   createStreetSideCheckboxes = () => {
  //     return streetSides.map(this.createCheckbox)
  //   }

  //   // render () {
  //     return (
  //       <div className="street-side">
  //         { createStreetSideCheckboxes() }
  //       </div>
  //     )
  //   // }

  const createCheckbox = label => (
    <Checkbox
            label={label}
            handleCheckboxChange={toggleCheckbox}
            key={label}
        />
  )

  const toggleCheckbox = label => {
    if (props.boxes.has(label)) {
      props.boxes.delete(label);
    } else {
      props.boxes.add(label);
    }
  }

  // Create the various checkboxes based on lists of strings
  const createStreetSideCheckboxes = () => {
    return streetSides.map(createCheckbox)
  }

  return (
    <div className="street-side">
      { createStreetSideCheckboxes() }
    </div>
  )
}

export default EvenOddCheckbox;