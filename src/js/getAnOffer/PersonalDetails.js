import React, { Component } from "react";
import InputRow from "../uiComponents/InputRow";
import FormHeader from "./FormHeader";
import SelectRow from "../uiComponents/SelectRow";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);

    this.state = { props };
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
            value={this.props.userDetails.firstName || ""}
            required={this.props.userDetails.firstName ? false : true}
          />

          <InputRow
            id="lastName"
            type="text"
            label="Last Name"
            placeHolder="Last Name"
            value={this.props.userDetails.lastName || ""}
            required={this.props.userDetails.lastName ? false : true}
          />

          <InputRow
            id="email"
            type="text"
            label="Email"
            placeHolder="Email"
            required={true}
            value=""
          />

          <InputRow
            id="number"
            type="text"
            label="Phone Number"
            placeHolder="Phone Number"
            value={this.props.userDetails.phone || ""}
            required={this.props.userDetails.phone ? false : true}
          />
        </fieldset>
      </div>
    );
  }
}

export default PersonalDetails;
