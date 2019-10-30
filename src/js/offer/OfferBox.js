import React, { Component } from "react";
import addFirestore from "./../utils/Firestore";
import { navigate } from "@reach/router";

class OfferBox extends Component {
  constructor(props) {
    super(props);
  }

  submitOfferDetails() {
    addFirestore(this.props, "contacts");
    navigate("/offer-accepted");
  }

  render() {
    return (
      <div className="offer-box container">
        <h2 className="offer-box__title">Preliminary cash offer</h2>
        <div className="offer-box__offer-info">
          <p className="offer-box__message">
            We&apos;re here to help you{" "}
            <strong>
              {this.props
                ? this.props.offerDetails.personalDetails.firstName
                : ""}{" "}
              {this.props
                ? this.props.offerDetails.personalDetails.lastName
                : ""}
            </strong>
            . Your preliminary cash offer is:
          </p>
          <p className="offer-box__cash-offer">
            <strong>
              £{this.props ? this.props.offerDetails.preliminaryOffer : ""}
            </strong>
          </p>
        </div>
        <div className="offer-box__next-steps">
          <button
            className="submit-btn__btn offer-box__accept-btn"
            onClick={e => {
              e.preventDefault();
              this.submitOfferDetails();
            }}
          >
            Contact Me To Discuss My Cash Offer
          </button>
        </div>
      </div>
    );
  }
}

export default OfferBox;
