import React from 'react';
import './NavigatorItem.css';

const navigatorItem = (props) => {
	var style={};
	if(props.currentPage === props.label || props.currentPage === "- "+props.label ){
		console.log('bold');
		style = {fontFamily: 'reg'};
	}
	else{
		console.log('lig');
		style = {fontFamily: 'lig'};
	}
    return(
        <div className="Item" style={style}>
            <p onClick={() => props.click(props.label)}>{props.label}</p>
        </div>
    );
};

export default navigatorItem;