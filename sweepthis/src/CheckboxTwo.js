import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CheckboxTwo extends Component {
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
      <div className="checkbox">
        <label htmlFor={value}>{label}</label>
        <input
          type="checkbox"
          name={value}
          id={value}
          checked={isChecked}
          onChange={this.toggleCheckboxChange}/>
      </div>
    );
  }
}

CheckboxTwo.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default CheckboxTwo;