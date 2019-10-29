import React, { Component } from "react";

class OfferBox extends Component {
  constructor(props) {
    super(props);

    this.state = props;

    console.log(this.state.offerDetails);
  }

  render() {
    return (
      <div className="offer-box container">
        <h2 className="offer-box__title">Preliminary cash offer</h2>
        <div className="offer-box__offer-info">
          <p className="offer-box__message">
            We&apos;re here to help you{" "}
            <strong>
              {this.state
                ? this.state.offerDetails.personalDetails.firstName
                : ""}{" "}
              {this.state
                ? this.state.offerDetails.personalDetails.lastName
                : ""}
            </strong>
            . Your preliminary cash offer is:
          </p>
          <p className="offer-box__cash-offer">
            <strong>
              £{this.state ? this.state.offerDetails.preliminaryOffer : ""}
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
