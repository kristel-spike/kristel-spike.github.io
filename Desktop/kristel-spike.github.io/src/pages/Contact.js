import React from 'react';
// import{BrowserRouter as Router, Switch, Route, Link} from "./node_modules/react-router-dom"
import Title from '../components/Title';

class Contact extends React.Component{

   constructor(props){
       super(props);
       this.state = {
        name: '',
        email:'',
        message:'',
        disable: false,
        emailSent: null,
        }
    }

    render(){
        return(
            <div>
                <Title title={this.props.title}/>
            </div>
        )
    }
}

export default Contact;