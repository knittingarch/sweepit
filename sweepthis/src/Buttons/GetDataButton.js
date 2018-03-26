import React from 'react';

const getDataButton = (props) => {
    return (
        <button className="GetDataButton" type="button" onClick={props.loaded}>
            Load All Streets
        </button>
    )
};

export default getDataButton;