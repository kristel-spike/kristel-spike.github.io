import React from 'react';
import { useSpring, animated } from 'react-spring';

function TileInfo(props){
    
    const style = useSpring({opacity: 1, from: {opacity:0}});

    return(
        <animated.div className="k-tile-info" style={style}>
            <p className="k-tile-title">{props.title}</p>
            <p className="k-tile-sub-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    )

}
export default TileInfo;