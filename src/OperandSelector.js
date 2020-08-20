import React from "react";

class OperandSelector extends React.Component {

    onOperatorChange = (event) => {
        //have this same event execute on the parent
        this.props.onChange(event.target.value)
    }

  render() {
    return (
      //select is a leading tag, so no need for <span>
      //span keeps it in one line"
      <span>
        <select onChange={this.onOperatorChange}>
          <option>+</option>
          <option>-</option>
          <option>*</option>
          <option>/</option>
        </select>
      </span>
    );
  }
}
export default OperandSelector;
