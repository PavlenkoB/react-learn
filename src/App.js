import React, {Component} from 'react';

import './App.css'

import RegistrationForm from './RegistrationForm';


class App extends Component {
    submit() {
        console.log('submit', this.testInput.value);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="test" ref={(input) => this.testInput = input}/>
                <button onClick={this.submit.bind(this)}>Submit</button>
            </div>
        )
    }
}

export default App