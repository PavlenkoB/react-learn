import React, {Component} from 'react';

import './RegistrationForm.css';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log('Email for sended',this.state.email);
    }
    handleEmailChange(event){
        console.log('Email wos changed ',event.target.value);
        this.setState({email:event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    className="emailField"
                    type="text"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <p>{this.state.email}</p>
                <button className="submitBtn">SAVE</button>
            </form>
        );
    }
}

export default RegistrationForm