import React from 'react';
// import{BrowserRouter as Router, Switch, Route, Link} from "./node_modules/react-router-dom"
import DownloadLink from "react-download-link";

import Title from '../components/Title';
import Content from '../components/Content';

function AboutMe(props){
    return(
        <div>
            <Title title={props.title} subTitle={props.subTitle} />
            <Content>
                <p>Hello! My name is Kristel.</p>
                <p>I am currently a Digital Marketer/Marketing Communications Associate employed at Computer Resources of America, a managed services provider and IT consultation business headquartered in Manhattan.</p>
                <p>I am also currently finishing my Bachelor's of Science degree in Computer Graphics and Imaging at Lehman College.</p>
                <DownloadLink label="Save" filename="resume.pdf" exportFile={()=> "My cached data"} />
            </Content>
        </div>
    );
}

export default AboutMe;