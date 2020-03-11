import React from 'react';
import ReactDOM from 'react-dom';
// Example:
//Write a form with two input fields:

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
        username: '',
        age: null,
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    render() {
        return(
            <form>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name, and submit:</p>
                <input
                type ="text"
                name = "username"
                onChange = {this.myChangeHandler}
                />
                <p>Enter the age:</p>
                <input 
                type = "text"
                name = "age"
                onChange = {this.myChangeHandler}
                />
            </form>
        );
    };
};

ReactDOM.render(<MyForm />, document.getElementById('root'));
// Note: We use the same event handler function for both input fields, we could write one event
// handler for each, but this gives us much cleaner code and is the preferred way in React.


