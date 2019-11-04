import React, { Component } from "react";
import MetaTags from "react-meta-tags";
import OfferAcceptedContent from "../offerAccepted/OfferAcceptedContent";
import NoOfferDetails from "../offer/NoOfferDetails";

class OfferAccepted extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  metaData() {
    return (
      <MetaTags>
        <title>Fast Sale Property Solutions - Accepted Offer</title>
        <meta
          name="description"
          content="Fast Sale Property Solutions will be contact shortly to discuss your offer"
        />
        <meta
          property="og:title"
          content="Fast Sale Property Solutions - Accepted Offer"
        />
      </MetaTags>
    );
  }

  render() {
    if (this.props.location.state) {
      return (
        <div>
          {this.metaData()}
          <OfferAcceptedContent />
        </div>
      );
    }
    return (
      <div>
        {this.metaData()}
        <NoOfferDetails />
      </div>
    );
  }
}

export default OfferAccepted;
