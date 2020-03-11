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
