import React from 'react';
import './Title.css';

const title = (props) => {
    return(
        <div className='TitleSite'>
            <h1 onClick={() => props.click(props.text)}>{props.text}</h1>
        </div>
    );
};

export default title;