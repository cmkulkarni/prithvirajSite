import React, {Component} from 'react';
import "./NavigatorShade.css";
import NavigatorItem from '../NavigatorItem/NavigatorItem';

class navigatorShade extends Component {
    state = {
        clicked : true
    };

    shade = null;
    
    clickHandler =()=>{
        this.setState({clicked: !this.state.clicked});


        this.props.click(this.props.label);
    }

    render(){
        

        if(this.state.clicked){
            this.shade = null;
        }
        else{
            this.shade = [
                            <NavigatorItem key='1' label="- Fashion & People" click={this.props.click} currentPage={this.props.currentPage}/>,
                            <NavigatorItem key='2' label="- Portraits" click={this.props.click} currentPage={this.props.currentPage}/>,
                            <NavigatorItem key='3' label="- Landscapes & Streets" click={this.props.click} currentPage={this.props.currentPage}/>,
            ];
        }

        if(this.props.homeClicked){
            this.shade = null;
        }

        return(
            <div className="NavigatorShade">
                <p onClick={this.clickHandler}>{this.props.label}</p>
                {this.shade}
            </div>
        );
    }
};

export default navigatorShade;