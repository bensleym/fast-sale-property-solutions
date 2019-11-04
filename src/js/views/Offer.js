import React, { Component } from "react";
import MetaTags from "react-meta-tags";
import UserOffer from "../offer/UserOffer";
import NoOfferDetails from "../offer/NoOfferDetails";

export default class Offer extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
  }

  metaData() {
    return (
      <MetaTags>
        <title>Fast Sale Property Solutions - Your Cash Offer</title>
        <meta
          name="description"
          content="Fast Sale Property Solutions offer for your property"
        />
        <meta
          property="og:title"
          content="Fast Sale Property Solutions - Your Cash Offer"
        />
      </MetaTags>
    );
  }

  render() {
    if (this.props.location.state) {
      return (
        <div>
          {this.metaData()}
          <UserOffer offerDetails={this.props.location.state} />
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
