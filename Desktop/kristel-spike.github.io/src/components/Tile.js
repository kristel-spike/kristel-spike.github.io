import React from 'react';

import TileInfo from '../components/TileInfo'

function Tile(props) {
    return(
        <div className="d-inline-block k-tile" onClick={(e) => props.click(props.item)}>
            <img className="k-tile-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
            {props.item.selected && 
            <TileInfo title={props.item.title} 
            subTitle={props.item.subTitle} 
            link={props.item.link}/>}
        </div>
    );
}

export default Tile;