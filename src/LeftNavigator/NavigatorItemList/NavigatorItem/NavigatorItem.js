import React from 'react';
import './NavigatorItem.css';

const navigatorItem = (props) => {
    return(
        <div className="Item">
            <p onClick={() => props.click(props.label)}>{props.label}</p>
        </div>
    );
};

export default navigatorItem;