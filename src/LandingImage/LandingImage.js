import React, {Component} from 'react';
import "./LandingImage.css";
import image1 from './Resources/1.jpg';
import image2 from './Resources/2.jpg';
import image3 from './Resources/3.jpg';
import image4 from './Resources/4.jpg';
import image5 from './Resources/5.jpg';
import image6 from './Resources/6.jpg';
import image7 from './Resources/7.jpg';

class LandingImage extends Component{
    state={index : 0};
    maxIndex = 7
    slideImages = [image1,image2,image3,image4,image5,image6,image7]
    display=0;
    corousel = () =>{
        var index=this.state.index;
        index++;
        if(index===this.maxIndex)
            index = 0;
        //console.log("corousel"+index);
        this.setState({index: index});
        setTimeout(this.corousel,3000);
    }

    constructor(props){
        super(props);
        //if(window.innerWidth<800)
           // this.display=1;
        //else{
            this.display=0;
            this.corousel();
        //}
    }

    render(){
        var image=<img className='imageLanding' src={this.slideImages[this.state.index]}/>;
        if(this.display===1){
            image = [];
            var slide = this.slideImages;
            this.slideImages.map(function(v,k){
                image.push(<img key={k} className='imageLanding' src={slide[k]}/>);
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