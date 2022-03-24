import React, {Component} from 'react';
import "./LandingImage.css";
import image1 from './Resources/1.jpg';
import image2 from './Resources/2.jpg';
import image3 from './Resources/3.jpg';
import image4 from './Resources/4.jpg';
import image5 from './Resources/5.jpg';
import image6 from './Resources/6.jpg';
import image7 from './Resources/7.jpg';
import image8 from './Resources/8.jpg';
import image9 from './Resources/9.jpg';
import image10 from './Resources/10.jpg';

class LandingImage extends Component{
    state={index : 0};
    maxIndex = 10
    slideImages = [image1,image2,image3,image8,image4,image9,image5,image10,image6,image7]
    display=0;
    corousel = () =>{
        var index=this.state.index;
        index++;
        if(index===this.maxIndex)
            index = 0;
        //console.log("corousel"+index);
        this.setState({index: index});
        setTimeout(this.corousel,2000);
    }

    constructor(props){
        super(props);
        //if(window.innerWidth<1000)
           // this.display=1;
        //else{
        this.display=0;
        this.slideImages.forEach(function(image){
            var image_var = new Image();
            image_var.onload = function(e){
                console.log("Image Loaded");
            };
            image_var.src = image;
        });
        this.corousel();

        //}
    }

    render(){
        var image=<img alt="Portraits, Fashion, people, prithviraj chavan" className='imageLanding' src={this.slideImages[this.state.index]}/>;
        if(this.display===1){
            image = [];
            var slide = this.slideImages;
            this.slideImages.forEach(function(v,k){
                image.push(<img alt="Portraits, Fashion, people" key={k} className='imageLanding' src={slide[k]}/>);
            });
        }


        return(
            <div className='LandingImage'>
                {image}
            </div>
        );
    }
};
////
export default LandingImage;