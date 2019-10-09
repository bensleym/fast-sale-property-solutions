import React, { Component } from "react";
import InputRow from "../uiComponents/InputRow";
import FormHeader from "./FormHaeder";
import SelectRow from "../uiComponents/SelectRow";

class PropertyDetails extends Component {
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
  render() {
    return (
      <div>
        <fieldset>
          <FormHeader headerTitle="Property Details" />
          <SelectRow
            id="timeToSell"
            label="How quickly would you like to sell the property"
            options={this.timeOptions}
          />

          <SelectRow
            id="reasonToSell"
            label="What is the reason for selling the property"
            options={this.reasonOptions}
          />
          <InputRow
            id="propertyValue"
            type="text"
            label="Estimated Property Value"
            placeHolder=""
          />

          <InputRow
            id="outstandingMortgage"
            type="text"
            label="Outstanding Amount On Mortgage"
            placeHolder=""
          />

          <SelectRow
            id="securedLoans"
            label="Do you have any loans secured on your property"
            options={this.secureLoansOptions}
          />
        </fieldset>
      </div>
    );
  }
}

export default PropertyDetails;
