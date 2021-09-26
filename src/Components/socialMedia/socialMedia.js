import React from 'react';


import facebookLog from './facebook.jpeg';
import instaLog from './Instagram.jpg';

import './socialMedia.css';

const socialMedia = (props) => {
    
	return (
		<div className="socialMedia">
            <a href="https://www.facebook.com/Pr1thviraj.Chavan/" target="_blank" rel="noreferrer">
                <img alt="prithviraj chavan facebook" className="fbFooter" src={facebookLog}/>
            </a>
            <a href="https://www.instagram.com/prithvirajchavan/" target="_blank" rel="noreferrer">
                <img alt="prithviraj chavan instagram" className="instaFooter" src={instaLog}/>
            </a>
        </div>
	);
}

export default socialMedia;