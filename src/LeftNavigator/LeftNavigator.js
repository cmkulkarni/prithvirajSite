import React from 'react';
import NavigatorItemList from './NavigatorItemList/NavigatorItemList';
import './LeftNavigator.css';
import facebookLog from './facebook.jpeg';
import instaLog from './Instagram.jpg';
import Title from './Title/Title';

const leftNavigator = (props) => {
    var style = {}
    if(!props.style)
        style = {display: "none"};

    var buttonMenu = (<button onClick={props.leftNavHandler} className="Menu">Menu</button>);
    if(!props.menuButton)
        buttonMenu=null;

    return (
        <div className="LeftNavigator">   
            <div className="AppTitle">
                <Title text = "Prithviraj Chavan" click={props.click}/>
                {buttonMenu}
            </div>       
            <div style={style}>  
                <NavigatorItemList click={props.click}/>
                <div className="socialMedia">
                    <a href="https://www.facebook.com/Pr1thviraj.Chavan/" target="_blank">
                        <img className="fb" src={facebookLog}/>
                    </a>
                    <a href="https://www.instagram.com/prithvirajchavan/" target="_blank">
                        <img className="insta" src={instaLog}/>
                    </a>
                </div>  
            </div>
        </div>
    );
};

export default leftNavigator;