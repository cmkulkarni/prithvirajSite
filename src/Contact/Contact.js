import React from 'react';
import './Contact.css';
import facebookLog from './facebook.jpeg';
import instaLog from './Instagram.jpg';

const about =(props) => {
    
    return(
        <div className="contact">
            <div className="socialMedia">
                <a href="https://www.facebook.com/Pr1thviraj.Chavan/" target="_blank">
                    <img className="fb" src={facebookLog}/>
                </a>
                <a href="https://www.instagram.com/prithvirajchavan/" target="_blank">
                    <img className="insta" src={instaLog}/>
                </a>
            </div>  
            <iframe key="2" className="cForm" src="https://docs.google.com/forms/d/e/1FAIpQLSe8s_6jTQDRsp33lByT5SqsaJERrUX6mg6dzWC-HtKhbpmaQQ/viewform?embedded=true" width="640" height="1018" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

        </div>
    );
};

export default about;