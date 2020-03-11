import React from 'react';
import ReactDOM from 'react-dom';
// Example:
// Write a form with two input fields:

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { username: '',
        age: null,
        };
    }
    mysubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username); 
    }
    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }
    render() {
        return(
            <form onSubmit={this.mysubmitHandler}>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name, and submit:</p>
                <input
                type="text"
                onChange={this.myChangeHandler}
                />
                <input
                type= "Submit"
                />
            </form>
        );
    };
};

ReactDOM.render(<MyForm />, document.getElementById('root'));
// Note: We use the same event handler function for both input fields, we could write one event handler for each, but
// this gives us much cleaner code and is the preferred way in React.


