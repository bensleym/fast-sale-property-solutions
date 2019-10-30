import React, { Component } from "react";
import HeroBanner from "../uiComponents/HeroBanner";
import OfferAcceptedContent from "../offerAccepted/OfferAcceptedContent";
import NoOfferDetails from "../offer/NoOfferDetails";

class OfferAccepted extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    if (this.props.location.state) {
      return (
        <div>
          <OfferAcceptedContent />
        </div>
      );
    }
    return (
      <div>
        <NoOfferDetails />
      </div>
    );
  }
}

export default OfferAccepted;
