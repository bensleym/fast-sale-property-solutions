import React, { Component } from "react";
import FormErrorHandling from "./../utils/FormErrorHandling";

class TextareaRow extends Component {
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
      <div className="textarea-row">
        <label htmlFor={this.props.id} className="textarea-row__label">
          <span className={this.props.required ? "textarea-row__required" : ""}>
            {this.props.label}:
          </span>

          <textarea
            id={this.props.id}
            type={this.props.type}
            name={this.props.id}
            className="textarea-row__input"
            value={this.state.value}
            onChange={event => this.inputChangedHandler(event)}
            data-required={this.props.required}
            data-form-control
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

export default TextareaRow;
