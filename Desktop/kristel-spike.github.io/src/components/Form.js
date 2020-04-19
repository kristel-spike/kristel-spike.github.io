import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "",
            email: "",
            message: ""
        }

       // this.updateNameLabel= this.updateNameLabel.bind(this)
    }

   /*  handleChange = event => {
        /*TODO - Logic for changing state based on form changes
    } */

    updateNameLabel = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    updateEmailLabel = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    
    updateMessageLabel = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {

        return(
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Full Name</label>
                <br></br>
                <input 
                    type="" 
                    value={this.state.name}
                    onChange={this.updateNameLabel}
                />
                <br></br>
                <br></br>
                <label for="email">Email Address</label>
                <br></br>
                <input 
                    type="" 
                    value={this.state.email}
                    onChange={this.updateEmailLabel}
                />
                <br></br>
                <br></br>
                <label for="message">Message
                    <br></br>
                    <textarea message={this.state.message} onChange={this.updateMessageLabel} />
                </label>

                <br></br>
                <br></br>

                 <button type="submit">Send</button>

                
            </form>
        )
    
    }
}

export default Form;