import React, { Component } from "react";
import FormErrorHandling from "../utils/FormErrorHandling";

class CheckboxRow extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  inputChangedHandler() {
    this.setState(({ checked }) => ({ checked: !checked }));
    new FormErrorHandling();
  }

  render() {
    return (
      <div className="checkbox-row">
        <input
          id={this.props.id}
          type="checkbox"
          name={this.props.id}
          className="checkbox-row__input"
          onChange={() => this.inputChangedHandler()}
          data-required={this.props.required}
          data-form-control-checkbox
          checked={this.state.checked}
        />
        <label htmlFor={this.props.id} className="checkbox-row__label">
          <span className={this.props.required ? "checkbox-row__required" : ""}>
            I have read and agree with the terms and conditions
          </span>
        </label>
        <span
          className="form-error-handling__error-message"
          data-form-error={this.props.id}
        ></span>
      </div>
    );
  }
}

export default CheckboxRow;
