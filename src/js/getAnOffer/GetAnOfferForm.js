import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import SubmitBtn from "../uiComponents/SubmitBtn";
import PropertyDetails from "./PropertyDetails";
import PropertyAddress from "./PropertyAddress";
import FormControl from "./../utils/FormControl";
import { navigate } from "@reach/router";

class GetAnOfferForm extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.userDetails
    };
    this.fsps = window.fsps;
    this.collectedData = {};
  }

  handleSubmit() {
    new FormControl();
    this.checkFullForm();

    if (this.fsps.fullAddress && this.fsps.formValid) {
      this.collectData();
      console.log(this.collectedData);
      navigate("/offer", { state: this.collectedData });
    }
  }

  handleChange() {
    console.log("Changed");
  }

  checkFullForm() {
    const addressDetailsId = document.getElementById("addressDetails");

    if (!this.fsps.fullAddress) {
      addressDetailsId.classList.add("property-address__error");
    } else {
      addressDetailsId.classList.remove("property-address__error");
    }
  }

  collectData() {
    const userTitle = document.getElementById("personalTitle").value;
    const userFirstName = document.getElementById("firstName").value;
    const userLastName = document.getElementById("lastName").value;
    const userPhone = document.getElementById("number").value;
    const userEmail = document.getElementById("email").value;

    const addressNumber = document.getElementById("houseNumber").value;
    const addressStreet = document.getElementById("street").value;
    const addressTownCity = document.getElementById("townCity").value;
    const addressCounty = document.getElementById("county").value;
    const addressPostcode = document.getElementById("postCode").value;

    const propertyTimeToSell = document.getElementById("timeToSell").value;
    const propertyReasonToSell = document.getElementById("reasonToSell").value;
    const propertyPropertyValue = document.getElementById("propertyValue")
      .value;
    const propertyOutstandingMortgage = document.getElementById(
      "outstandingMortgage"
    ).value;
    const propertySecuredLoans = document.getElementById("securedLoans").value;
    const propertySecuredLoansAmmount = document.getElementById(
      "securedLoansValue"
    )
      ? document.getElementById("securedLoansValue").value
      : 0;

    const perc = 0.25 * propertyPropertyValue;
    const result = propertyPropertyValue - perc;

    const preliminaryOffer = Math.round(result * 100) / 100;

    const userDetails = {
      personalDetails: {
        title: userTitle,
        firstName: userFirstName,
        lastName: userLastName,
        phone: userPhone,
        email: userEmail
      },
      addressDetails: {
        street: `${addressNumber} ${addressStreet}`,
        townCity: addressTownCity,
        county: addressCounty,
        postcode: addressPostcode
      },
      propertyDetails: {
        timeToSell: propertyTimeToSell,
        reasonToSell: propertyReasonToSell,
        propertyValue: propertyPropertyValue,
        outstandingMortgage: propertyOutstandingMortgage,
        securedLoans: propertySecuredLoans,
        securedLoansAmmount: propertySecuredLoansAmmount
      },
      description: `Time in which to sell: ${propertyTimeToSell}, 
                    Reason for sale: ${propertyReasonToSell}, 
                    Property value: £${propertyPropertyValue}, 
                    Outstanding mortgage: £${propertyOutstandingMortgage}, 
                    Secured loans against the property: ${propertySecuredLoans}, 
                    Secured loans ammount: £${propertySecuredLoansAmmount}, 
                    preliminary Offer: £${preliminaryOffer}`,
      preliminaryOffer
    };

    this.collectedData = userDetails;
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
