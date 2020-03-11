import React from 'react';
import ReactDOM from 'react-dom';
// Example:
// Add a submit button and an event handler in the onSubmit attribute:

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { username: ''};
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
// Note: We use event.preventDefault() to prevent the form from actually being submitted.


