import React from 'react';
//import About from '/components/About';
//import Contact from '/components/Contact';
//import Works from '/components/Works';
//import Home from '/components/Home';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom" 

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
        <div>
  
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <Link to="/works">Works</Link>
              </li>
              <li>
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
          </nav>
  
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
  
        </div>
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
