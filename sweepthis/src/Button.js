import React from 'react';

const Button = (props) => {
    return (
        <button className={ props.class } type={ props.type } onClick={ props.notify }>
            { props.value }
        </button>
    )
};

export default Button;