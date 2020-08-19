import React from 'react'

//extends is a child class of a parent class so we can access the react methods
//built into class so the function keyword does not further specify "function"

  class NumberInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.props.onNumberChange(event.target.value);
    }
    }
  
    render() {
      return (

        <fieldset>
            <input type="number" class="form-control" value={this.state.value} onChange={this.handleChange} />
        </fieldset>
      );
    }

export default NumberInput