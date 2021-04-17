import React from 'react';
import './Fation.css';
import Series from './Series/Series.js';

const fashion = (props) => {
   
    var seriesArray = [];

    if(props.series)
        props.series.map(function(v,k){
            seriesArray.push(
                <Series key={k} click={props.click} app={props.app} series={v.series} cover={v.cover} description={v.description}/>
            );
        });

    return(
        <div className="fashion">
            {seriesArray}
        </div>
    );
};

export default fashion;