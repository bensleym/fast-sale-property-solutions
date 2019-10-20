import React, { Component } from "react";
import InputRow from "../uiComponents/InputRow";
import FormHeader from "./FormHeader";
import SelectRow from "../uiComponents/SelectRow";

class PropertyDetails extends Component {
  state = {
    checkSecuredLoans: false
  };
  constructor() {
    super();

    this.timeOptions = [
      "Less than one month",
      "1-3 Months",
      "3-6 Months",
      "7-9 Months",
      "10+ Months"
    ];
    this.reasonOptions = [
      "Financial difficulties",
      "Facing repossession",
      "Divorce / Separation",
      "Inherited the property",
      "Moving abroad",
      "Job relocation",
      "Retirement",
      "Need a bigger house",
      "Need a smaller house",
      "Other"
    ];
    this.secureLoansOptions = ["Yes", "No"];
  }

  handleSecuredLoans() {
    const sercureLoans = document.getElementById("securedLoans");

    if (sercureLoans.value === "yes") {
      this.setState({
        checkSecuredLoans: true
      });
    } else {
      this.setState({
        checkSecuredLoans: false
      });
    }
  }

  propertyDetailsForm() {
    return (
      <fieldset>
        <FormHeader headerTitle="Property Details" />
        <SelectRow
          id="timeToSell"
          label="How quickly would you like to sell the property"
          options={this.timeOptions}
          required={true}
        />

        <SelectRow
          id="reasonToSell"
          label="What is the reason for selling the property"
          options={this.reasonOptions}
          required={true}
        />
        <InputRow
          id="propertyValue"
          type="text"
          label="Estimated Property Value"
          placeHolder=""
          required={true}
        />

        <InputRow
          id="outstandingMortgage"
          type="text"
          label="Outstanding Amount On Mortgage"
          placeHolder=""
          required={true}
        />

        <div className="select-row">
          <label htmlFor="securedLoans" className="select-row__label">
            <span className="select-row__required">
              Do you have any loans secured on your property:
            </span>
            <select
              id="securedLoans"
              name="securedLoans"
              className="select-row__input"
              data-required={true}
              defaultValue=""
              onChange={e => {
                this.handleSecuredLoans(e);
              }}
              onBlur={e => {
                this.handleSecuredLoans(e);
              }}
            >
              <option value="" disabled>
                Please Choose
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <span
              className="form-error-handling__error-message"
              data-form-error="securedLoans"
            ></span>
          </label>
        </div>
      </fieldset>
    );
  }

  render() {
    if (!this.state.checkSecuredLoans) {
      return <div>{this.propertyDetailsForm()}</div>;
    }
    return (
      <div>
        {this.propertyDetailsForm()}
        <InputRow
          id="securedLoansValue"
          type="text"
          label="If yes, how much is the loan"
          placeHolder="Loan Value"
        />
      </div>
    );
  }
}

export default PropertyDetails;
