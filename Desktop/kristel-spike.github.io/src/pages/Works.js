import React from 'react';
// import{BrowserRouter as Router, Switch, Route, Link} from "./node_modules/react-router-dom"
//import './index.css'

import Title from '../components/Title';
import Projects from '../components/Projects'

function Works(props){
    return(
        <div>
            <Title className="title-border" title={props.title} subTitle={props.subTitle}/>
            <h2 className="header-styles">Hello World, here's some stuff I did! Just click a tile for more Info.</h2>
            <Projects/>
        </div>
    );
}

export default Works;
