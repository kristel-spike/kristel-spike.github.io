import React from 'react';
// import{BrowserRouter as Router, Switch, Route, Link} from "./node_modules/react-router-dom"
import Title from '../components/Title';
import Carousel from '../components/Carousel';

function HomePage(props){
    return(
        <div>
            <Title title={props.title} subTitle={props.subTitle}/>
            <h2 className="header-styles">Click a tile for more information</h2>
            <Carousel/>
        </div> 
    );
}

export default HomePage;