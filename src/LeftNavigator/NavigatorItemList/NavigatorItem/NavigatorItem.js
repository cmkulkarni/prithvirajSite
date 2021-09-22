import React from 'react';
import {
  Link
} from "react-router-dom";

import './NavigatorItem.css';

const navigatorItem = (props) => {
	var style={};
	if(props.currentPage === props.label || props.currentPage === "- "+props.label ){
		console.log('bold');
		style = {fontFamily: 'bol'};
	}
	else{
		console.log('lig');
		style = {fontFamily: 'lig'};
	}
    return(
        <div className="Item">
            <Link to={props.to} onClick={() => props.click(props.label)} className="ItemLink" style={style}>{props.label}</Link>
        </div>
    );
};

export default navigatorItem;