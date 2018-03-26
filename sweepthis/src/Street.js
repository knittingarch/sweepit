import React from 'react';

const Street = (props) => {
    return (
        <div>
            <a href="#">{props.details.street_name} {props.details.suffix}</a>
        </div>
    )
};

export default Street;