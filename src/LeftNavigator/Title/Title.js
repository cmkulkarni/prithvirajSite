import React from 'react';import {
  Link
} from "react-router-dom";

import './Title.css';

const title = (props) => {
    return(
        <div className='TitleSite'>
            <Link to="/" onClick={() => props.click(props.text)} className="TitleClass">{props.text}</Link>
        </div>
    );
};

export default title;