import React from 'react';

import './Image.css';

const Image = (props) => {
    var columnImage = [];
    for(var i = 0 ; i< props.images.length ; i++){
        columnImage.push(  
            <div className="imageContainer">          
            <img 
                onClick={
                    props.click.bind(
                        props.app,
                        {page: "Portfolio", series:props.series}
                    )
                }
                key = {i}
                src = {props.images[i]} 
                className="image"
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