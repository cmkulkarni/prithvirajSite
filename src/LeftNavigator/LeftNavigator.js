import React from 'react';

import NavigatorItemList from './NavigatorItemList/NavigatorItemList';
import './LeftNavigator.css';
import ham from './hamburger.jpg';
import Title from './Title/Title';

const leftNavigator = (props) => {
    var style = {}
    if(!props.style)
        style = {display: "none"};

    var buttonMenu = (<img alt="Prithviraj chavan" onClick={props.leftNavHandler} className="Menu" src={ham}/>);
    if(!props.menuButton)
        buttonMenu=null;

    

    return (
        <div className="LeftNavigator">   
        
            <div className="AppTitle">
                <Title text = "Prithviraj Chavan" click={props.click}/>
                {buttonMenu}
            </div>       
            
            <div style={style}>
                <NavigatorItemList changeContentPage={props.changeContentPage} click={props.click} homeClicked={props.homeClicked} currentPage={props.currentPage}/>
            </div>
        </div>
    );
};

export default leftNavigator;