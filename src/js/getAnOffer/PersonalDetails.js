import React, { Component } from "react";
import InputRow from "../uiComponents/InputRow";
import FormHeader from "./FormHaeder";
import SelectRow from "../uiComponents/SelectRow";

class PersonalDetails extends Component {
  render() {
    return (
      <div>
        <fieldset>
          <FormHeader headerTitle="Personal Details" />
          <SelectRow
            id="personalTitle"
            label="Title"
            options={["Mr", "Mrs", "Miss", "Ms", "Dr"]}
          />
          <InputRow
            id="firstName"
            type="text"
            label="First Name"
            placeHolder="First Name"
          />

          <InputRow
            id="lastName"
            type="text"
            label="Last Name"
            placeHolder="Last Name"
          />

          <InputRow id="email" type="text" label="Email" placeHolder="Email" />

          <InputRow
            id="number"
            type="text"
            label="Phone Number"
            placeHolder="Phone Number"
          />
        </fieldset>
      </div>
    );
  }
}

export default PersonalDetails;
