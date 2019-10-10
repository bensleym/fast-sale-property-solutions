import React, { Component } from "react";

class InputRow extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
    console.log(this.state);
  }

  inputChangedHandler(event) {
    console.log(this.state);
    this.setState({ value: event.target.value });
  }

  createInputRow() {
    return (
      <div className="input-row">
        <label htmlFor={this.props.id} className="input-row__label">
          {this.props.label}:
          <input
            id={this.props.id}
            type={this.props.type}
            placeholder={this.props.placeHolder}
            name={this.props.id}
            className="input-row__input"
            value={this.state.value}
            onChange={event => this.inputChangedHandler(event)}
          />
        </label>
      </div>
    );
  }

  render() {
    return this.createInputRow();
  }
}

export default InputRow;
