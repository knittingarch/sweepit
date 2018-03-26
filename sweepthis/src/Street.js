import React from 'react';

const Street = (props) => {
    return (
        <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
                <a href="#">{props.details.street_name} {props.details.suffix}</a>
            </div>
        </div>
    )
};

export default Street;