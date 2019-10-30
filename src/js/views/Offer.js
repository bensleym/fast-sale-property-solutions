import React, { Component } from "react";
import UserOffer from "../offer/UserOffer";
import NoOfferDetails from "../offer/NoOfferDetails";

export default class Offer extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
  }

  render() {
    if (this.props.location.state) {
      return <UserOffer offerDetails={this.props.location.state} />;
    }
    return <NoOfferDetails />;
  }
}
