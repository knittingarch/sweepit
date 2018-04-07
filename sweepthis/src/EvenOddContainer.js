import React from 'react';
import Checkbox from './Checkbox';

const streetSides = [
  'even',
  'odd',
];

const EvenOddContainer = (props) => {

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
      <ul className="evenodd">
        <li>
          <Checkbox
            label={label}
            name={ props.value}
            id={props.value}
            htmlFor={props.value}
            handleCheckboxChange={toggleCheckbox}
            key={label}
              />
        </li>
      </ul>
  )

  const toggleCheckbox = label => {
    if (props.boxes.has(label)) {
      props.boxes.delete(label);
    } else {
      props.boxes.add(label);
    }
  }

  return (
    <div className="street-side">
      { streetSides.map(createCheckbox) }
    </div>
  )
}

export default EvenOddContainer;