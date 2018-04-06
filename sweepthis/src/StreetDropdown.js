import React from 'react';
import Street from './Street';

const StreetDropdown = (props) => {
  return (
    <span>
      <input list="streets" placeholder="Choose streets..." />
        <datalist id="streets">
          { Object.keys(props.streetList).map( key => 
            <Street key={ key } details={ props.streetList[key] } />)}
        </datalist>
    </span>
    )
};

export default StreetDropdown;