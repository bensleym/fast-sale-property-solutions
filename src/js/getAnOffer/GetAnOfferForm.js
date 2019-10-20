import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import SubmitBtn from "../uiComponents/SubmitBtn";
import PropertyDetails from "./PropertyDetails";
import PropertyAddress from "./PropertyAddress";
import FormControl from "./../utils/FormControl";

class GetAnOfferForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.userDetails;
    this.fsps = window.fsps;
  }
  handleSubmit() {
    new FormControl();
    this.checkFullForm();

    if (this.fsps.fullAddress && this.fsps.formValid) {
      console.log("Form complete");
    }
  }

  handleChange() {
    console.log("Changed");
  }

  checkFullForm() {
    console.log("help");
    const addressDetailsId = document.getElementById("addressDetails");

    if (!this.fsps.fullAddress) {
      addressDetailsId.classList.add("property-address__error");
    } else {
      addressDetailsId.classList.remove("property-address__error");
    }
  }

  render() {
    return (
      <div className="get-an-offer-form">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
          }}
          onChange={e => {
            e.preventDefault();
          }}
        >
          <PersonalDetails userDetails={this.state} />
          <PropertyAddress />
          <PropertyDetails />
          <SubmitBtn value="Get an offer" />
        </form>
      </div>
    );
  }
}

export default GetAnOfferForm;
