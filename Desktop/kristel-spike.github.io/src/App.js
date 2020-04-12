import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
//import About from '/components/About';
//import Contact from '/components/Contact';
//import Works from '/components/Works';
//import Home from '/components/Home';
import{BrowserRouter as Router, Switch, Route, Link} from "react-router-dom" 

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "Kristel B",
      headerLinks:[
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Works', path: '/works'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Hello World!',
        subtitle: 'Welcome to the world of Kristel. Please feel free to explore my portfolio!'
      },
      about: {
        title: 'About Me'
      },
      works: {
        title: 'Works'
      },
      contact: {
        title: 'Get In Touch'
      }
    }
  }

  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expan="lg">
            <Navbar.Brand>Kristel B</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About Me</Link>
                <Link className="nav-link" to="/works">Works</Link>
                <Link className="nav-link" to="/contact">Contact Me</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>
          <Footer/>
        </Container> 

      </Router>
    );
  }
}
  

    function Home() {
      return <h2>Home</h2>
    }

    function About() {
      return<h2>About Me</h2>
    }

    function Works() {
      return<h2>Works</h2>
    }

    function Contact() {
      return<h2>Contact Me</h2>
    }
       //<Home />
       //<About />
       //<Works />
       //<Contact />


export default App;
