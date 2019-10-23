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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            tristique tincidunt mi efficitur suscipit. Nam tristique enim
            ligula, porttitor blandit metus molestie quis. Integer commodo
            sapien justo, at sollicitudin odio dignissim vitae.{" "}
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
