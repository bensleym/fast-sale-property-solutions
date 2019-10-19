import React, { Component } from "react";
import InputRow from "../uiComponents/InputRow";
import FormHeader from "./FormHeader";
import SelectRow from "../uiComponents/SelectRow";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    console.log(this.state.userDetails);
  }
  render() {
    return (
      <div>
        <fieldset>
          <FormHeader headerTitle="Personal Details" />
          <SelectRow
            id="personalTitle"
            label="Title"
            options={["Mr", "Mrs", "Miss", "Ms", "Dr"]}
            required={true}
          />
          <InputRow
            id="firstName"
            type="text"
            label="First Name"
            placeHolder="First Name"
            value={this.props.userDetails.firstName}
            required={true}
          />

          <InputRow
            id="lastName"
            type="text"
            label="Last Name"
            placeHolder="Last Name"
            value={this.props.userDetails.lastName}
            required={true}
          />

          <InputRow
            id="email"
            type="text"
            label="Email"
            placeHolder="Email"
            required={true}
          />

          <InputRow
            id="number"
            type="text"
            label="Phone Number"
            placeHolder="Phone Number"
            value={this.props.userDetails.phone}
            required={true}
          />
        </fieldset>
      </div>
    );
  }
}

export default PersonalDetails;
