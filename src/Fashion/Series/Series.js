import React, {Component} from 'react';
import './Series.css';

class Series extends Component{
    
    render(){
        var seriesTopImage = this.props.series[0];
        if(Array.isArray(this.props.series[0]))
            seriesTopImage = this.props.series[0][0];
        if(this.props.cover)
            seriesTopImage = this.props.cover;
        return(
            <div className='Series'>
                <img 
                    onClick={
                        this.props.click.bind(
                            this.props.app, 
                            {page: "- Fashion & People",series:this.props.series}
                        )
                    }
                    src = {seriesTopImage}
                />
                <p style={{fontsize:"medium"}}>{this.props.description}</p>
            </div>
        );
    }
};

export default Series;