import React from 'react';
// import{BrowserRouter as Router, Switch, Route, Link} from "./node_modules/react-router-dom"
import Title from '../components/Title';
import Carousel from '../components/Carousel';

function HomePage(props){
    return(
        <div>
            <Title title={props.title} subTitle={props.subTitle}/>
            <h1>Click a tile for more information</h1>
            <Carousel/>
        </div> 
    );
}

export default HomePage;