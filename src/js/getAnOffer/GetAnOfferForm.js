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
  }
  handleSubmit() {
    new FormControl();
  }

  handleChange() {
    console.log("Changed");
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
