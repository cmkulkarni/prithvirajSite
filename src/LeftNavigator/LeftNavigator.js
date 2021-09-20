import React from 'react';

import NavigatorItemList from './NavigatorItemList/NavigatorItemList';
import './LeftNavigator.css';
import facebookLog from './facebook.jpeg';
import instaLog from './Instagram.jpg';
import ham from './hamburger.jpg';
import Title from './Title/Title';

const leftNavigator = (props) => {
    var style = {}
    if(!props.style)
        style = {display: "none"};

    var buttonMenu = (<img alt="Prithviraj chavan" onClick={props.leftNavHandler} className="Menu" src={ham}/>);
    if(!props.menuButton)
        buttonMenu=null;

    var socMedia = (
        <div className="socialMedia">
            <a href="https://www.facebook.com/Pr1thviraj.Chavan/" target="_blank" rel="noreferrer">
                <img alt="prithviraj chavan facebook" className="fb" src={facebookLog}/>
            </a>
            <a href="https://www.instagram.com/prithvirajchavan/" target="_blank" rel="noreferrer">
                <img alt="prithviraj chavan instagram" className="insta" src={instaLog}/>
            </a>
        </div>
    );
    if(window.innerWidth<1000)
        socMedia = null;

    return (
        <div className="LeftNavigator">   
        
            <div className="AppTitle">
                <Title text = "Prithviraj Chavan" click={props.click}/>
                {buttonMenu}
            </div>       
            
            <div style={style}>
                <NavigatorItemList changeContentPage={props.changeContentPage} click={props.click} homeClicked={props.homeClicked} currentPage={props.currentPage}/>
                
            </div>

            {socMedia}
        </div>
    );
};

export default leftNavigator;