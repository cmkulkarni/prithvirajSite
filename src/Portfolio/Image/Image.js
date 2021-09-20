import React from 'react';

import './Image.css';

const Image = (props) => {
    var columnImage = [];
    for(var i = 0 ; i< props.images.length ; i++){
        columnImage.push(  
            <div className="imageContainer">          
            <img 
                alt="prithviraj chavan portfolio, fashion, style, poeple, portraits, landscape, street"
                onClick={
                    props.click.bind(
                        props.app,
                        {page: "Portfolio", series:props.series, src: props.images[i]}
                    )
                }
                key = {i}
                src = {props.images[i]} 
                className="image"
                style={{width: props.width}}
            />
            </div>
        );
    }
    return (
        <div className="ImageColmn">
            {columnImage}
        </div>
    );
};

export default Image;