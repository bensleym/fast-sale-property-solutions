import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import SubmitBtn from "../uiComponents/SubmitBtn";
import PropertyDetails from "./PropertyDetails";
import PropertyAddress from "./PropertyAddress";

class GetAnOfferForm extends Component {
  handleSubmit() {
    console.log("Submitted");
  }

  handleChange() {
    console.log("Changed");
  }

  render() {
    return (
      <div className="get-an-offer-form">
        <form onSubmit={this.handleChange()} onChange={this.handleChange()}>
          <PersonalDetails />
          <PropertyAddress />
          <PropertyDetails />
          <SubmitBtn value="Get an offer" />
        </form>
      </div>
    );
  }
}

export default GetAnOfferForm;
