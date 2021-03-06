import React from 'react';
import{BrowserRouter as Router, Switch, Route, Link} from "react-router-dom" 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
//import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Logo from './assets/images/k.png';


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
        subTitle: 'Welcome to the world of Kristel. Please feel free to explore my portfolio!'
      },
      about: {
        title: 'About Me',
        subTitle: 'Fancy meeting you here. Nice to meet you.'
      },
      works: {
        title: 'Works'
      },
      contact: {
        title: 'Get In Touch'
      }
    }
  }

  Logo() {
    let styles = {
      width: '20px',
      height: '20px'
    }
  }

  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar expand="lg" >
            <Navbar.Brand>
              <img src={Logo} alt="Logo" className="nav-logo"></img>
            </Navbar.Brand>

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
            <Route className="nav-style" path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} />} /> 
            <Route path="/about" exact render={()=> <AboutMe title={this.state.about.title} subTitle={this.state.about.subTitle} />} />
            <Route path="/works" exact render={() => <Works title={this.state.works.title} />} />
            <Route path="/contact" exact render={() => <Contact title={this.state.contact.title} />} />
            
        
          <Footer/>
        </Container> 

      </Router>
    );
  }
}

export default App;