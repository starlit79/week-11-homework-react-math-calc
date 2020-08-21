import React from "react";
import OperandSelector from './OperandSelector'

class Calculator extends React.Component {
  //class is combination of function and object
  constructor() {
    super();
    //super will call the constructor
    //state is always a object to start
    this.state = {
      //value of property so use :
      firstOperand: '0',
      operator: "+",
      //first operator to start +
      secondOperand: '0',
      result: "",
    };
    //"this" only exists for even handlers if we include lines
    //like this for each even handler
    //this.calculate = this.calculate.bind(this)
  }

  /**
   * event target is the element that had the event
   * -in this case the firstOperand input had a "change" event
   * this point to this component
   * new syntax
   */
  onFirstOperandChange = (event) => {
    const firstOperand = event.target.value;
    this.setState({
      firstOperand
    });
  };

  onSecondOperandChange = (event) => {
      const secondOperand = event.target.value;
      this.setState({
          secondOperand
      })
  }

  onOperatorChange = (operator) => {
    this.setState({
        operator
    })
  }

  // evaluateNumbers = () => {
  //   if ((isNaN(this.state.firstOperand) || this.state.firstOperand === '') ||
  //       (isNaN(this.state.secondOperand) || this.state.secondOperand === '')) {
  //       this.setState({ warning: 'Please provide a valid number for both operands.' })
  //       this.setState({ result: '' })
  //   }
  // }
  //use older non-experimental 
  calculate = () =>{
      let result = 0;
      const {firstOperand, secondOperand, operator} = this.state;
      //dom always return string to us, value is tech string
      switch(operator){
        case '+':
            result = parseInt(firstOperand)+ parseInt(secondOperand);
            break;
        case '-':
            result = parseInt(firstOperand)- parseInt(secondOperand);
            break;
        case '*':
            result = parseInt(firstOperand)* parseInt(secondOperand);
            break;
        case '/':
            result = parseInt(firstOperand)/ parseInt(secondOperand);
            break;
      }
      this.setState({
          result
      })
  }

  render() {
    return (
      <div>
        <input type="number" onChange={this.onFirstOperandChange} />

        <OperandSelector onChange={this.onOperatorChange}/>
        <input type="number" onChange={this.onSecondOperandChange}/>

        <button onClick ={this.calculate}> = </button>

        <input value={this.state.result} type="text" disabled />

      </div>
    );
  }
}
export default Calculator;
