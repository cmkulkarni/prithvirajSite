import React from 'react';
import './About.css';
import prithvi from './prithvirajChavan.jpg';

const about =(props) => {
   
    return(
        <div class="aboutWrapper">
            <div className="about">
                <div className="description">
                    <p>I am Prithviraj.</p>
                    <p>Currently based in Pune, India.</p>
                    <p>I primarily shoot Fashion and Portraiture but also find myself exploring and indulging in places and experiences around the world when travelling for work or leisure.</p>

                    <p>With photography diplomas from MIT School Of Photography and Bharti Vidyapeeth’s School of Photography, I started my journey in photography in 2015.</p> 

                    <p>Taking inspiration from photographers like Prabuddha Dasgupta, Richard Avedon, Irving Penn, Gregory Crewdson, I often find their art pushing me to work harder towards my craft. </p>

                    <p>Photography for me is about creating thought provoking pictures and trying to get the best out of people.</p>
                    <p>There is no better feeling than creating a visual that excites me and allows memories to be made in the process of it.</p>
                </div>
                <img className="author" src={prithvi} alt="Prithviraj"></img>
            </div>
            <iframe className="contactForm" src="https://docs.google.com/forms/d/e/1FAIpQLSe8s_6jTQDRsp33lByT5SqsaJERrUX6mg6dzWC-HtKhbpmaQQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    );
};

export default about;