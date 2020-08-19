import React from 'react'

// const operator = {
//   +: '+', 
//   -: '-', 
//   *: '*', 
//   /: '/'
// };

class Operator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '*'};
  
      this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    // handleSubmit(event) {
    //   alert('Your favorite flavor is: ' + this.state.value);
    //   event.preventDefault();
    // }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <select>
  <option value = "+" > * </option>
  <option value = "-"> - </option>
  <option selected value = "*" > + </option>
  <option value = "/"> / </option>
</select>
        </form>
      );
    }
  }
  
 export default Operator;