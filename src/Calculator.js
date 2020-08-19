import React from 'react'
import Evaluate from './Evaluate'
import Operator from './Operator'
import Result from './Result';
import NumberInput from './NumberInput';
//import NumberInput from './NumberInput'

const InputNumbers = {
    Input1: 'Number1',
    Input2: 'Number2'
  };

function add(num1, num2){
    return num1 + num2
}

function minus(num1, num2){
    return num1 - num2
}

function divide(num1, num2){
    return num1 / num2
}

function multiply(num1, num2){
    return num1 * num2
}

class Calculator extends React.Component{
    //'constructor' instance gets created
    constructor(props) {
        super(props);
        this.state = {NumberInput: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    //'componentDidMount' available and rendered
    handleChange(event) {
        this.setState({inputNumber: event.target.inputNumber});
      }
    
    //'render'
    render(){
        const assignment = this.state.assignment; 
        const inputNumber = this.state.inputNumber

        return (
            <div>
                <form>
                <NumberInput
                Assignment1 = 'Number1'
                />
                <Operator/>
                <NumberInput
                Assignment2 = 'Number2'/>
                <Evaluate/>
                <Result/>
                </form>
            </div>
        );
    }
}

export default Calculator;