import React from 'react';
import './Fation.css';
import Series from './Series/Series.js';

const fashion = (props) => {
   
    var seriesArray = [];
    if(props.series)
        props.series.forEach(function(v,k){
            seriesArray.push(
                <Series key={k} click={props.click} app={props.app} series={v.series} cover={v.cover} description={v.description} props={props.display}/>
            );
        });

    return(
        <div className="fashion">
            {seriesArray}
        </div>
    );
};

export default fashion;