import React from 'react';

import './Footer.css';
import SocialMedia from '../socialMedia/socialMedia.js';

const Footer = (props) => {
	return(
		<footer className="Footer">
			<SocialMedia/>


            <p className="CopyRight">Copyright &copy; 2020-2021 Prithviraj Chavan</p>
		</footer>
	);
}

export default Footer;