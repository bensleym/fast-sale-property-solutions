import React, { Component } from "react";
import GetAnOfferForm from "../getAnOffer/GetAnOfferForm";
import HeroBanner from "../uiComponents/HeroBanner";

class GetAnOffer extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.location.state;
  }

  render() {
    return (
      <div>
        <HeroBanner
          cssModifier="get-an-offer"
          title="Get An Offer"
          offerFormDisplay={false}
        >
          <p className="hero-banner__intro">
            It’s quick and simple to get an instant preliminary cash offer
            today. Simple fill out the form below to get your cash offer.
          </p>
        </HeroBanner>
        <div className="container">
          <GetAnOfferForm userDetails={this.state} />
        </div>
      </div>
    );
  }
}

export default GetAnOffer;
