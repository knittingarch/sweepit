import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Checkbox extends Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    const { label, value } = this.props;
    const { isChecked } = this.state;

    return (
      <div>
        <input
            type="checkbox"
            id={ value }
            name={ value }
            checked={ isChecked }
            onChange={ this.toggleCheckboxChange }/>
        <label htmlFor={ value }>{ label }</label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;