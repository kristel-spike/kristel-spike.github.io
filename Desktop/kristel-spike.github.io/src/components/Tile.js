import React from 'react';

import TileInfo from '../components/TileInfo'

function Tile(props) {
    return(
        <div>
            <img className="" src={props.item.imgSrc} alt={props.item.imgSrc}/>
            {props.item.selected && 
            <TileInfo title={props.item.title} 
            subTitle={props.item.subTitle} 
            link={props.item.link}/>}
        </div>
    );
}

export default Tile;