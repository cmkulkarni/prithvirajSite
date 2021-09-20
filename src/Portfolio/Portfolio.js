import './Portfolio.css';
import Image from './Image/Image';

const portfolio = (props) => {
    
    var all = props.images[0].concat(props.images[1]);
    var images = [
        <Image click={props.click} app={props.app} images={props.images[0]} series={all} width={props.width}/>,
        <Image click={props.click} app={props.app} images={props.images[1]} series={all} width={props.width}/>,
    ];

    return(
        <div className="PortfolioRow">
            {images}
        </div>
    );
};

export default portfolio;