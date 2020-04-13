import React from 'react';
// import{BrowserRouter as Router, Switch, Route, Link} from "./node_modules/react-router-dom"
import Title from '../components/Title'

function HomePage(props){
    return(
        <Title title={props.title} subTitle={props.subTitle}/>
    );
}

export default HomePage;