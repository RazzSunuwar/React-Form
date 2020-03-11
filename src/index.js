import React from 'react';
import ReactDOM from 'react-dom';
// Example: When you fill in your age, you will get an alert if the age field is not numeric:

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
        if (nam === "age") {
            if (!Number(val)) {
                alert("Your age must be a number");
            }
        }
        this.setState({[nam]: val});
    }
    render() {
        return(
            <form>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
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
// Below you will see the same example as above, but the validation is done when
// the form gets submitted instead of when you write in the field.


