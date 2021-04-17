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
    indexSize=10;
    PageNumber="";
    lengthOfAllIMages=0;

    constructor(props){
        super(props);

        if(window.innerWidth<800)
            this.indexSize=4;
        
        var viewAll = !this.state.viewAll;
        var allImages=[];
        var imgSeriesIndex = 0;
        var label="View All"

        if(viewAll){
            label="Single View"
        }

        this.props.series.map(function(v){    
            if(Array.isArray(v))
                v.map(function(vT){
                    allImages.push(<img key={imgSeriesIndex++} src={vT}/>)
                });
            else
                allImages.push(<img key={imgSeriesIndex++} src={v}/>)
        });

        this.setState({
            viewAll: viewAll,
            viewAllContentLength: allImages.length,
            allImages: allImages,
            viewAllLabel: label
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
            if(this.state.viewAll)
                this.changeViewIndex(this.indexSize);
        }
        else{
            index--;
            if(this.state.viewAll)
                this.changeViewIndex(-this.indexSize)
        }
        
        var imgStyle = "singlePhoto";
        
        if(index === this.props.series.length)
            index = 0;
        else if(index < 0)
            index = this.props.series.length-1;

        this.images = (<img className={imgStyle} src={this.props.series[index]}/>);

        if(Array.isArray(this.props.series[index])){
            var imageList = [];

            if(this.props.series[index].length === 2)
                imgStyle = "doublePhotos";
            else if(this.props.series[index].length === 3)
                imgStyle = "triplePhotos";

            this.props.series[index].map(function(v, k){
                imageList.push((<img className={imgStyle} src={v} key={k}/>));
            });
            this.images = imageList;
        }

        this.setState({
            sliderIndex: index
        });
    }

    slideClickHandler(clickDirection){
        var index = this.state.sliderIndex;

        if(clickDirection === "right"){
            index++;
            if(this.state.viewAll)
                this.changeViewIndex(this.indexSize);
        }
        else{
            index--;
            if(this.state.viewAll)
                this.changeViewIndex(-this.indexSize)
        }
        
        var imgStyle = "singlePhoto";
        
        if(index === this.props.series.length)
            index = 0;
        else if(index < 0)
            index = this.props.series.length-1;

        this.images = (<img className={imgStyle} src={this.props.series[index]}/>);

        if(Array.isArray(this.props.series[index])){
            var imageList = [];

            if(this.props.series[index].length === 2)
                imgStyle = "doublePhotos";
            else if(this.props.series[index].length === 3)
                imgStyle = "triplePhotos";

            this.props.series[index].map(function(v, k){
                imageList.push((<img className={imgStyle} src={v} key={k}/>));
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

    viewAllClick(e){        
        var viewAll = !this.state.viewAll;
        var allImages=[];
        var imgSeriesIndex = 0;
        var label="View All"

        if(viewAll){
            label="Single View"
        }

        this.props.series.map(function(v){    
            if(Array.isArray(v))
                v.map(function(vT){
                    allImages.push(<img key={imgSeriesIndex++} src={vT}/>)
                });
            else
                allImages.push(<img key={imgSeriesIndex++} src={v}/>)
        });

        this.setState({
            viewAll: viewAll,
            viewAllContentLength: allImages.length,
            allImages: allImages,
            viewAllLabel: label
        });
    }   

    render(){
        var imageList = this.images;
        var style = "singlePhoto";
        var content;

        if(imageList === null){
            if(Array.isArray(this.props.series[this.state.sliderIndex])){
                imageList = [];
                if(this.props.series[this.state.sliderIndex].length === 2)
                    style = "doublePhotos";
                else if(this.props.series[this.state.sliderIndex].length === 3)
                    style = "triplePhotos";

                this.props.series[this.state.sliderIndex].map(function(v, k){
                    imageList.push((<img className={style} src={v} key={k}/>));
                });
            }
            else{                
                imageList = (<img className={style} src={this.props.series[this.state.sliderIndex]}/>)
            }
        }

        if(this.state.viewAll){
            var imagesToView = [];
            for(var i=this.state.viewAllIndex;i<this.state.viewAllIndex+this.indexSize;i++){
                imagesToView.push(this.state.allImages[i]);
                if(this.state.allImages[i+1] === undefined) {
                    break;
                }
            }
            var currentPage = this.state.viewAllIndex<0?(-1*this.state.viewAllIndex):this.state.viewAllIndex+this.indexSize;
            this.PageNumber=this.state.viewAllIndex+"..."+currentPage+"/"+this.state.viewAllContentLength

            content = [
                <button key='1' className='leftButton' onClick={this.slideClickHandler.bind(this,"left")}>Previous</button>,
                <div key='2' className='viewAllContent'>{imagesToView}</div>,
                <button key='3' className='rightButton' onClick={this.slideClickHandler.bind(this,"right")}>Next</button>
            ];
        }
        else{
            this.PageNumber=this.state.sliderIndex;

            content = [
                <button key='1' className='leftButton' onClick={this.slideClickHandler.bind(this,"left")}>Previous</button>,
                <div key='2' className='photosHolder'>{imageList}</div>,
                <button key='3' className='rightButton' onClick={this.slideClickHandler.bind(this,"right")}>Next</button>
            ];
        }


        return(
            <div className='Slider' onClick={this.Click.bind(this)}>
                <div className='photos'>
                    <button className='closeButton' onClick={this.props.closeClick}>Close</button>
                    <button className='viewAllButton' onClick={this.viewAllClick.bind(this)}>{this.state.viewAllLabel}</button>,
                    <p className="Page">{this.PageNumber}</p>
                    {content}
                </div>
            </div>        
        );
    }
};

export default Slider;