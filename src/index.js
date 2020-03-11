import React from 'react';
import ReactDOM from 'react-dom';
// Example: A simple select box, where the selected value "Volvo" is initialized in the constructor:

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mycar: "Buggati"
        };
    };

    render() {
        return(
            <form>
                <select value={this.state.mycar}>
                    <option value="Lamborgini">Lamborgini</option>
                    <option value="Ferrari">Ferrari</option>
                    <option value="Buggati">Buggati</option>
                </select>
            </form>
        );
    };
};  

ReactDOM.render(<MyForm />, document.getElementById('root'));


