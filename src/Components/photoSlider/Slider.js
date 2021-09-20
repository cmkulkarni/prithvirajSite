import React, {Component} from 'react';
import './Slider.css';

class Slider extends Component {
    state={
        sliderIndex:0,
        viewAll: false,
        viewAllLabel: "View All",
        viewAllIndex: 0,
        viewAllContentLength: 0,
        allImages: []
    };
    images = null;
    viewAll = false;
    lengthOfAllIMages=0;
    firstLoad = true;

    constructor(props){
        super(props);
        var that = this;
        
        var viewAll = !this.state.viewAll;
        var allImages=[];
        var imgSeriesIndex = 0;
        var label="View All"

        if(viewAll){
            label="Single View"
        }

        this.props.series.forEach(function(v){    
            if(Array.isArray(v))
                v.forEach(function(vT){
                    allImages.push(<img alt="Fashion, landscape, people, streets, portraits" onClick={that.getIndexOfTheImage.bind(that,imgSeriesIndex)} src={vT}/>)
                });
            else
                allImages.push(<img alt="Fashion, landscape, people, streets, portraits" onClick={that.getIndexOfTheImage.bind(that,imgSeriesIndex)} key={imgSeriesIndex++} src={v}/>)
        });
        //var indexToShow = this.props.series.indexOf(this.props.src);
        this.setState({
            viewAll: viewAll,
            viewAllContentLength: allImages.length,
            allImages: allImages,
            viewAllLabel: label,
            sliderIndex: this.props.index
        });
        this.lengthOfAllIMages = allImages.length
    }

    Click(e){
        console.log("a"+e);
        var width = window.innerHeight;
        var clickLoc = e.screenX;
        var index = this.state.sliderIndex;

        if(clickLoc > width/2){
            index++;
        }
        else{
            index--;
        }
        
        var imgStyle = "singlePhoto";
        
        if(index === this.props.series.length)
            index = 0;
        else if(index < 0)
            index = this.props.series.length-1;

        this.images = (<img alt="Fashion, landscape, people, streets, portraits" className={imgStyle} src={this.props.series[index]}/>);

        if(Array.isArray(this.props.series[index])){
            var imageList = [];

            if(this.props.series[index].length === 2)
                imgStyle = "doublePhotos";
            else if(this.props.series[index].length === 3)
                imgStyle = "triplePhotos";

            this.props.series[index].forEach(function(v, k){
                imageList.push((<img alt="Fashion, landscape, people, streets, portraits" className={imgStyle} src={v} key={k}/>));
            });
            this.images = imageList;
        }

        this.setState({
            sliderIndex: index
        });
    }

    getIndexOfTheImage(imgSeriesIndex){
        console.log(imgSeriesIndex);
        var itemCounter = -1;
        var counter = -1;
        this.props.series.forEach(function(v){
            if(Array.isArray(v) && itemCounter < imgSeriesIndex){
                counter++;
                itemCounter += v.length;
            }
            else if(itemCounter < imgSeriesIndex){
                counter++;
                itemCounter++;
            }
        });
        this.viewAllClick(counter);
    }

    slideClickHandler(clickDirection){
        var index = this.state.sliderIndex;

        if(clickDirection === "right"){
            index++;
        }
        else{
            index--;
        }
        
        var imgStyle = "singlePhoto";
        
        if(index === this.props.series.length)
            index = 0;
        else if(index < 0)
            index = this.props.series.length-1;

        this.images = (<img alt="Fashion, landscape, people, streets, portraits" className={imgStyle} src={this.props.series[index]}/>);

        if(Array.isArray(this.props.series[index])){
            var imageList = [];

            if(this.props.series[index].length === 2)
                imgStyle = "doublePhotos";
            else if(this.props.series[index].length === 3)
                imgStyle = "triplePhotos";

            this.props.series[index].forEach(function(v, k){
                imageList.push((<img alt="Fashion, landscape, people, streets, portraits" className={imgStyle} src={v} key={k}/>));
            });
            this.images = imageList;
        }

        this.setState({
            sliderIndex: index
        });

    }

    changeViewIndex(indexChange){
        var viewAllIndex = this.state.viewAllIndex + indexChange;
        var viewAllContentLength = this.state.viewAllContentLength;

        if(viewAllIndex < viewAllContentLength){
            this.setState({
                viewAllIndex: viewAllIndex
            });
        }
        else{
            viewAllIndex=0;
            this.setState({
                viewAllIndex: viewAllIndex
            });
        }
    }

    viewAllClick(sliderIndex){        
        var viewAll = !this.state.viewAll;
        var allImages=[];
        var imgSeriesIndex = 0;
        var label="View All";
        var that = this;

        if(viewAll){
            label="Single View"

            this.props.series.forEach(function(v){    
                if(Array.isArray(v))
                    v.forEach(function(vT){
                        allImages.push(<img alt="Fashion, landscape, people, streets, portraits" onClick={that.getIndexOfTheImage.bind(that, imgSeriesIndex)} key={imgSeriesIndex++} src={vT}/>)
                    });
                else
                    allImages.push(<img alt="Fashion, landscape, people, streets, portraits" onClick={that.getIndexOfTheImage.bind(that, imgSeriesIndex)} key={imgSeriesIndex++} src={v}/>)
            });
        }

        this.images=null;

        this.setState({
            viewAll: viewAll,
            viewAllContentLength: allImages.length,
            allImages: allImages,
            viewAllLabel: label,
            sliderIndex: sliderIndex
        });


    }   

    render(){
        var imageList = this.images;
        var style = "singlePhoto";
        var content;

        if(this.state.viewAll){
            var imagesToView = [];
            for(var i = 0 ; i < this.state.allImages.length ; i++){
                imagesToView.push(this.state.allImages[i]);
                if(this.state.allImages[i+1] === undefined) {
                    break;
                }
            }
            content = [
                <div key='2' className='viewAllContent'>{imagesToView}</div>
            ];
        }
        else{       
            if(this.firstLoad){
                this.firstLoad = false;
                this.setState({sliderIndex: this.props.index});
            }      
            if(imageList === null){
                if(Array.isArray(this.props.series[this.state.sliderIndex])){
                    imageList = [];
                    if(this.props.series[this.state.sliderIndex].length === 2)
                        style = "doublePhotos";
                    else if(this.props.series[this.state.sliderIndex].length === 3)
                        style = "triplePhotos";

                    this.props.series[this.state.sliderIndex].forEach(function(v, k){
                        imageList.push((<img alt="Fashion, landscape, people, streets, portraits" className={style} src={v} key={k}/>));
                    });
                }
                else{                
                    imageList = (<img alt="Fashion, landscape, people, streets, portraits" className={style} src={this.props.series[this.state.sliderIndex]}/>)
                }
            }
            content = [
                <button key='1' className='leftButton' onClick={this.slideClickHandler.bind(this,"left")}>Previous</button>,
                <div key='2' className='photosHolder' onClick={this.Click.bind(this)}>{imageList}</div>,
                <button key='3' className='rightButton' onClick={this.slideClickHandler.bind(this,"right")}>Next</button>
            ];
        }


        return(
            <div className='Slider' >
                <div className='photos'>
                    <button className='closeButton' onClick={this.props.closeClick}>Close</button>
                    <button className='viewAllButton' onClick={this.viewAllClick.bind(this, this.state.sliderIndex)}>{this.state.viewAllLabel}</button>
                    {content}
                </div>
            </div>        
        );
    }
};

export default Slider;