import React, { Component } from "react";
import MetaTags from "react-meta-tags";
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
        <MetaTags>
          <title>Fast Sale Property Solutions - Get An Offer</title>
          <meta
            name="description"
            content="Get an offer for your property today. Fast Sale Property Solutions can offer you cash for your property for a quick sale."
          />
          <meta
            property="og:title"
            content="Fast Sale Property Solutions - Get An Offer"
          />
        </MetaTags>
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
