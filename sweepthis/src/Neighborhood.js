import React from 'react';

const Neighborhood = (props) => {
    return (
        <div>
            <ul>
                <li>{props.details.neighborhood}</li>
            </ul>
        </div>
    )
};

export default Neighborhood;