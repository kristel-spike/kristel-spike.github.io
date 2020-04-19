import React from 'react';
// import{BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Title from '../components/Title';
import Content from '../components/Content';
import Form from '../components/Form'
import Logo from '../assets/images/k.png';

//import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Contact extends React.Component{

    /* constructor(props){
       super(props);
       this.state = {
        name: '',
        email:'',
        message:'',
        disable: false,
        emailSent: null,
        }
    } 

     handleChange=(event) => {
        const target = event.target;
        const value = event.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:value
        })
    } 

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        }) 
     */ 

    render(){
        return(
            <div>
                <Title title={this.props.title}/>
                
                <Container>
                    <Row>
                        <Col>
                            <Form/>
                        </Col>
                        
                        <Col>
                            <img src={Logo} alt="Logo" className="logo"></img>
                        </Col>
                    </Row>
                </Container>
                { /* <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="border border-dark">
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group className="border border-dark">
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group className="border border-dark">
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange}/>
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" diabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </Form>
                </Content> */}
            </div>
        )
    }
}

export default Contact;