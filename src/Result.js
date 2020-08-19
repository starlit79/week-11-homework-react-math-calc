import React from 'react' 
import NumberInput from './NumberInput'
import Operator from './Operator';
import Calculator from './Calculator'

class Result extends React.Component {
    constructor(props) {
      super(props);
      this.state = {...props}
    }
    componentDidUpdate(prevProps) {

      switch(Operator){
      case '+':
        this.setState(this.props) = Add(Input1, Input2)
        break;
      case '-':
        this.setState(this.props) = Subtract(Input1, Input2)
        break;
      case '*':
        this.setState(this.props) = Multiply(Input1, Input2)
        break;
      case '/':
        this.setState(this.props) = Divide(Input1, Input2)
        break;
    }}

    render () {
      return (<div>
        <input name="result" value= {this.setState(this.props)} class="form-control" disabled />
    </div>)
        }
      }

export default Result