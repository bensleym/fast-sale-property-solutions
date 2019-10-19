import React, { Component } from "react";

class SelectRow extends Component {
  constructor(props) {
    super(props);
    this.selectRef = React.createRef();
  }

  componentDidMount() {
    this.optionsGenerator(this.props.options);
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
          >
            <option value="" disabled selected>
              Please Choose
            </option>
          </select>
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
