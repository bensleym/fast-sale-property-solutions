import React, { Component } from "react";
import addFirestore from "./../utils/Firestore";
import { navigate } from "@reach/router";

export default class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.location.state,
      offerAccepted: false
    };
  }

  submitOfferDetails() {
    addFirestore(this.state, "contacts");
    this.setState({ offerAccepted: true });
  }

  missingOffer() {
    navigate("/get-an-offer");
  }

  offerDom() {
    return (
      <div className="offer container">
        <h1 className="offer__title">This is your preliminary cash offer</h1>
        <div className="offer__offer-info">
          <p className="offer__message">
            We&apos;re here to help you{" "}
            <strong>
              {this.state ? this.state.personalDetails.firstName : ""}{" "}
              {this.state ? this.state.personalDetails.lastName : ""}
            </strong>
            . Your preliminary cash offer is:
          </p>
          <p className="offer__cash-offer">
            <strong>£{this.state ? this.state.preliminaryOffer : ""}</strong>
          </p>
        </div>
        <div className="offer__next-steps">
          <h2>What happens next?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            fringilla, massa ut cursus volutpat, nulla enim tempus ante, quis
            viverra arcu lacus vel diam. Maecenas eleifend velit at pulvinar
            laoreet. Vestibulum hendrerit nisi nec massa molestie, at fermentum
            enim pulvinar.
          </p>
          <button
            className="submit-btn__btn offer__accept-btn"
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

  noOfferDom() {
    return (
      <div className="offer container">
        <h1 className="offer__title">Theres been a problem</h1>
        <div className="offer__next-steps">
          <h2>Your cash offer seems to be missing!</h2>
          <p>
            It appears that there has been a problem with your cash offer or the
            information required to provide you with a cash offer is missing.
            Use the link below to fill out a simple form to receive your cash
            offer today.
          </p>
          <button
            className="submit-btn__link offer__accept-btn"
            onClick={e => {
              e.preventDefault();
              this.missingOffer();
            }}
          >
            Get an offer
          </button>
        </div>
      </div>
    );
  }

  offerAcceptedDom() {
    return (
      <div className="offer container">
        <h1 className="offer__title">Your details have been submitted</h1>
        <div className="offer__next-steps">
          <h2>We have your details and will be in touch shortly to discuss</h2>
          <p>
            Thank you for submitting your information. We now have everything we
            need for the momment to get the ball rolling. We are now matching
            you with a cash buyer and will be in touch shortly to discuss your
            cash offer and what happens next. There is no obligation to accept
            the cash offer but we are here to help you.
          </p>
        </div>
      </div>
    );
  }

  render() {
    if (this.state === null) {
      return this.noOfferDom();
    }
    if (this.state.offerAccepted) {
      return this.offerAcceptedDom();
    }
    return this.offerDom();
  }
}
