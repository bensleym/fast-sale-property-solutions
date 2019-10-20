import React, { Component } from "react";
import FormErrorHandling from "./../utils/FormErrorHandling";

class SelectRow extends Component {
  constructor(props) {
    super(props);
    this.selectRef = React.createRef();
  }

  componentDidMount() {
    this.optionsGenerator(this.props.options);
  }

  inputChangedHandler() {
    new FormErrorHandling();
  }

  selectGenerator() {
    return (
      <div className="select-row">
        <label htmlFor={this.props.id} className="select-row__label">
          <span className={this.props.required ? "select-row__required" : ""}>
            {this.props.label}:
          </span>
          <select
            id={this.props.id}
            name={this.props.id}
            ref={this.selectRef}
            className="select-row__input"
            data-required={this.props.required}
            data-form-control
            defaultValue=""
            onBlur={() => {
              this.inputChangedHandler();
            }}
            onChange={() => {
              this.inputChangedHandler();
            }}
          >
            <option value="" disabled>
              Please Choose
            </option>
          </select>
          <span
            className="form-error-handling__error-message"
            data-form-error={this.props.id}
          ></span>
        </label>
      </div>
    );
  }

  optionsGenerator(options) {
    const selectEl = this.selectRef.current;
    for (let i = 0; i < options.length; i += 1) {
      const optionOutput = `<option vlaue="${options[i]}">${options[i]}</option>`;

      selectEl.insertAdjacentHTML("beforeend", optionOutput);
    }
  }
  render() {
    return this.selectGenerator();
  }
}

export default SelectRow;
