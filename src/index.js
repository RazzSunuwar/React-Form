import React from 'react';
import ReactDOM from 'react-dom';
// Example:
// Add an event handler in the onchange attribute, and let the event handler update the state object:

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { username: ''};
    }
    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }
    render(){
        return(
            <form>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name:</p>
                <input
                type="text"
                onChange={this.myChangeHandler}
                />
            </form>
        );
    };
};

ReactDOM.render(<MyForm />, document.getElementById('root'));

// Note: You must intilize the state in the constructor method before you can use it.
// Note: You get access to the field to the value by using the event.target.value syntax.


