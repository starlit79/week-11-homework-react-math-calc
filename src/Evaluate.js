import React from 'react'

class Evaluate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {NumberInput: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        alert('A number was submitted: ' + this.state.NumberInput);
        event.preventDefault();
          }

    render(){
        return(
            <button type ='button' onClick = {this.onSubmit}>
          = </button>
        )
    }
}


export default Evaluate