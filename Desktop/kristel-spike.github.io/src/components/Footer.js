import React from 'react';
import{BrowserRouter as Router, Switch, Route, Link} from "react-router-dom" 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
//import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';

import HomePage from '../pages/HomePage';
import AboutMe from '../pages/AboutMe';
import Works from '../pages/Works';
import Contact from '../pages/Contact';
import Logo from '../assets/images/k.png';

function Footer() {
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Kristel B
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        G'on 'head! Tell me whassup.
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;