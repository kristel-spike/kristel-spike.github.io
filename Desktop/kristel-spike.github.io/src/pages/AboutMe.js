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
                <p>My skill areas in digital marketing includes Search Engine Optimization, Google Analytics, Google Adwords, Customer Relations Management, Website Design and Development, Social Media Management, and Brand Management.</p>
                <p>I am also currently finishing my Bachelor's of Science degree in Computer Graphics and Imaging at Lehman College.</p>
                <p>My skills in multimedia design and art includes Adobe Photoshop, InDesign, Illustrator, After Effects, Premiere Pro, and Bridge, along with Cinema 4D, and other digital design platforms such as Canva and Procreate. I also draw as a hobby.</p>
                { // <DownloadLink label="DOWNLOAD" filename="resume.pdf" exportFile={() => "My cached data"}></DownloadLink> 
                // <button type="button">Download a copy of my resume.</button> 
    }
                <a href="resume.pdf" download> Download a copy of my resume.</a>
            </Content>
        </div>
    );
}

export default AboutMe;