import React, { Component } from "react";
import FormErrorHandling from "./../utils/FormErrorHandling";

class InputRow extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  inputChangedHandler(event) {
    this.setState({ value: event.target.value });
    new FormErrorHandling();
  }

  createInputRow() {
    return (
      <div className="input-row">
        <label htmlFor={this.props.id} className="input-row__label">
          <span className={this.props.required ? "input-row__required" : ""}>
            {this.props.label}:
          </span>
          <input
            id={this.props.id}
            type={this.props.type}
            placeholder={this.props.placeHolder}
            name={this.props.id}
            className="input-row__input"
            value={this.state.value}
            onChange={event => this.inputChangedHandler(event)}
            data-required={this.props.required}
            data-form-control
            data-input-special={this.props.dataAttributeSpecial}
          />
          <span
            className="form-error-handling__error-message"
            data-form-error={this.props.id}
          ></span>
        </label>
      </div>
    );
  }

  render() {
    return this.createInputRow();
  }
}

export default InputRow;
