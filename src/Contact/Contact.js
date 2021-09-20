import React from 'react';
import './Contact.css';
import facebookLog from './facebook.jpeg';
import instaLog from './Instagram.jpg';

const about =(props) => {
    var contactSM;
    if(false){//window.innerWidth>1000){
        contactSM=[
            <p key='1'>Contact No.: 9665007082</p>,
            <p key='2'>Mail Id.: contact.prithvirajchavan@gmail.com</p>
        ];
    }
    else{
        contactSM=(<div className="socialMedia_contact">
                <a href="https://www.facebook.com/Pr1thviraj.Chavan/" target="_blank" rel="noreferrer" >
                    <img alt="prithviraj chavan photography facebook" className="fb" src={facebookLog}/>
                </a>
                <a href="https://www.instagram.com/prithvirajchavan/" target="_blank" rel="noreferrer" >
                    <img alt="prithviraj chavan instagram" className="insta" src={instaLog}/>
                </a>
                
            </div>  )
    }
    return(
        <div className="contact">
            {contactSM}
            <iframe title="Contact prithviraj" key="2" className="cForm" src="https://docs.google.com/forms/d/e/1FAIpQLSe8s_6jTQDRsp33lByT5SqsaJERrUX6mg6dzWC-HtKhbpmaQQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

        </div>
    );
};

export default about;