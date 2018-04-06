import React from 'react';
import Neighborhood from './Neighborhood';

const NeighborhoodDropdown = (props) => {
  return (
    <span>
      <input 
        list="neighborhoods"
        onChange={ props.populate }
        placeholder="Choose neighborhood..." />
      <datalist id="neighborhoods">
        { Object.keys(props.streetList).map( key => 
          <Neighborhood
            key={ key }
            details={ props.streetList[key] } />)}
      </datalist>
    </span>
  )
}

export default NeighborhoodDropdown;