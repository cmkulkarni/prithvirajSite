import React, {Component} from 'react';
import "./NavigatorShade.css";
import NavigatorItem from '../NavigatorItem/NavigatorItem';

class navigatorShade extends Component {
    state = {
        clicked : false
    };

    shade = null;
    
    clickHandler =()=>{
        this.setState({clicked: !this.state.clicked});

        if(this.state.clicked){
            this.shade = null;
        }
        else{
            this.shade = [
                            <NavigatorItem label="- Fashion & People" click={this.props.click}/>,
                            <NavigatorItem label="- Portraits" click={this.props.click}/>,
                            <NavigatorItem label="- Landscapes & Streets" click={this.props.click}/>,
            ];
        }

        this.props.click(this.props.label);
    }

    render(){
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