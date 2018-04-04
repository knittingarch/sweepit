import React from 'react';

const Street = (props) => {
    return (
        <div>
            <ul>
                <li>{props.details.street_name} {props.details.suffix}</li>
            </ul>
        </div>
    )
};

export default Street;