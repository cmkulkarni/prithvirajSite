import React, { Component} from 'react';
import NavigatorItem from './NavigatorItem/NavigatorItem';
import NavigatorShade from './NavigatorShade/NavigatorShade';
import './NavigatorItemList.css';

class NavigatorItemList extends Component{

    render(){
        return (
            <div style={this.props.style} className="NavigatorItemList">
                <NavigatorItem label="Portfolio" click={this.props.click}/>
                <NavigatorShade label="Work" click={this.props.click}/>
                <NavigatorItem label="About" click={this.props.click}/>
                <NavigatorItem label="Contact" click={this.props.click}/>
            </div>
        );
    }
};

export default NavigatorItemList;