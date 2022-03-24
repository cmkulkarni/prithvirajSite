import React, {Component} from 'react';
import {
  Link
} from "react-router-dom";

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
                            <NavigatorItem to="FashionAndPeople" key='1' label="- Fashion & People" click={this.props.click} currentPage={this.props.currentPage}/>,
                            <NavigatorItem to="Food" key='2' label="- Food" click={this.props.click} currentPage={this.props.currentPage}/>,
                            <NavigatorItem to="StillLifeAndProducts" key='3' label="- Still Life & Products" click={this.props.click} currentPage={this.props.currentPage}/>,
                            <NavigatorItem to="Portraits" key='4' label="- Portraits" click={this.props.click} currentPage={this.props.currentPage}/>,
                            <NavigatorItem to="LandscapesAndStreets" key='5' label="- Landscapes & Streets" click={this.props.click} currentPage={this.props.currentPage}/>,
            ];
        }

        if(this.props.homeClicked){
            this.shade = null;
        }

        return(
            <div className="NavigatorShade">
                <Link to={this.props.to} onClick={this.clickHandler} className="ShadeLink">{this.props.label}</Link>
                {this.shade}
            </div>
        );
    }
};

export default navigatorShade;