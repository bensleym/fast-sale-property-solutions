import React, { Component } from "react";
import GetAnOfferHeader from "../getAnOffer/GetAnOfferHeader";
import GetAnOfferForm from "../getAnOffer/GetAnOfferForm";

class GetAnOffer extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.location.state;
  }

  render() {
    return (
      <div className="container">
        <GetAnOfferHeader />
        <GetAnOfferForm userDetails={this.state} />
      </div>
    );
  }
}

export default GetAnOffer;
