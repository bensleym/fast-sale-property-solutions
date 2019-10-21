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
      console.log("complete");
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

  collectData() {
    const userTitle = document.getElementById("personalTitle");
    const userFirstName = document.getElementById("firstName");
    const userLastName = document.getElementById("lastName");
    const userPhone = document.getElementById("number");
    const userEmail = document.getElementById("email");

    const addressNumber = document.getElementById("houseNumber");
    const addressStreet = document.getElementById("street");
    const addressTownCity = document.getElementById("townCity");
    const addressCounty = document.getElementById("county");
    const addressPostcode = document.getElementById("postCode");

    const propertyTimeToSell = document.getElementById("timeToSell");
    const propertyReasonToSell = document.getElementById("reasonToSell");
    const propertyPropertyValue = document.getElementById("propertyValue");
    const propertyOutstandingMortgage = document.getElementById(
      "outstandingMortgage"
    );
    const propertySecuredLoans = document.getElementById("securedLoans");

    this.setState({
      userTitle,
      userFirstName,
      userLastName,
      userPhone,
      userEmail,
      addressNumber,
      addressStreet,
      addressTownCity,
      addressCounty,
      addressPostcode,
      propertyTimeToSell,
      propertyReasonToSell,
      propertyPropertyValue,
      propertyOutstandingMortgage,
      propertySecuredLoans
    });
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
