import React from 'react';

const Street = (props) => {
  return (
    <option>{ props.details.street_name} {props.details.suffix }</option>
    )
};

export default Street;