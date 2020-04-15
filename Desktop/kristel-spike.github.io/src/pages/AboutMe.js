import React from 'react';
// import{BrowserRouter as Router, Switch, Route, Link} from "./node_modules/react-router-dom"
import Title from '../components/Title';
import Content from '../components/Content';

function AboutMe(props){
    return(
        <div>
            <Title title={props.title} subTitle={props.subTitle} />
            <Content>
                <p>WHAT IT DO BAYBEE</p>
                <a href='../src/assets/resume.pdf' download>click to download</a>
            </Content>
        </div>
    );
}

export default AboutMe;