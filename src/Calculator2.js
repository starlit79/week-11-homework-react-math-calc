import React from 'react'
class Calculator2 extends React.Component {
    // constructor
    constructor(props) {
        super(props);
        this.state = {
            inputNumber1: '',
            inputNumber2: '',
            operator: '+',
            result: '',
            warning: ''
        }
        //this.state = {...props}
    }
    inputNumber1Change = (event) => {
        this.setState({ inputNumber1: event.target.value })
    }
    inputNumber2Change = (event) => {
        this.setState({ inputNumber2: event.target.value })
    }
    operatorChange = (event) => {
        this.setState({ operator: event.target.value })
    }
    evaluateNumbers = () => {
        if ((isNaN(this.state.inputNumber1) || this.state.inputNumber1 === '') ||
            (isNaN(this.state.inputNumber2) || this.state.inputNumber2 === '')) {
            this.setState({ warning: 'Please provide a valid number for both operands.' })
            this.setState({ result: '' })
        }
        else {
            this.setState({ warning: '' })
            switch (this.state.operator) {
                case '+':
                    this.setState({ result: (Number(this.state.inputNumber1) + Number(this.state.inputNumber2)) })
                    break
                case '-':
                    this.setState({ result: (Number(this.state.inputNumber1) - Number(this.state.inputNumber2)) })
                    break
                case '*':
                    this.setState({ result: (Number(this.state.inputNumber1) * Number(this.state.inputNumber2)) })
                    break
                default:
                    this.setState({ result: (Number(this.state.inputNumber1) / Number(this.state.inputNumber2)) })
            }
        }
    }
    // componentDidMount
    // render
    render() {
        return (
            <div>
                <input onChange={this.inputNumber1Change} />
                <select onChange={this.operatorChange}>
                    <option value="+"> + </option>
                    <option value="-"> - </option>
                    <option value="*"> * </option>
                    <option value="/"> / </option>
                </select>
                <input onChange={this.inputNumber2Change} />
                <button onClick={this.evaluateNumbers}> = </button>
                <input defaultValue={this.state.result} />
                <div>{this.state.warning ? this.state.warning : null}</div>
            </div>
        )
    }
}
export default Calculator2