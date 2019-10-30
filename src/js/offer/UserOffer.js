import React, { Component } from "react";
import addFirestore from "./../utils/Firestore";
import { navigate } from "@reach/router";
import HeroBanner from "../uiComponents/HeroBanner";

class UserOffer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  submitOfferDetails() {
    addFirestore(this.props.offerDetails, "contacts");
    navigate("/offer-accepted", { state: "accepted" });
  }

  render() {
    return (
      <div>
        <HeroBanner
          cssModifier="offer"
          title="Offer"
          offerFormDisplay={false}
          offerBox={true}
          offerDetails={this.props.offerDetails}
        ></HeroBanner>
        <div className="offer container">
          <h1 className="offer__title">This is your preliminary cash offer</h1>
          <div className="offer__offer-info">
            <p className="offer__message">
              We&apos;re here to help you{" "}
              <strong>
                {this.props.offerDetails
                  ? this.props.offerDetails.personalDetails.firstName
                  : ""}{" "}
                {this.props.offerDetails
                  ? this.props.offerDetails.personalDetails.lastName
                  : ""}
              </strong>
              . Your preliminary cash offer is:
            </p>
            <p className="offer__cash-offer">
              <strong>
                £
                {this.props.offerDetails
                  ? this.props.offerDetails.preliminaryOffer
                  : ""}
              </strong>
            </p>
          </div>
          <div className="offer__next-steps">
            <h2>What happens next?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              fringilla, massa ut cursus volutpat, nulla enim tempus ante, quis
              viverra arcu lacus vel diam. Maecenas eleifend velit at pulvinar
              laoreet. Vestibulum hendrerit nisi nec massa molestie, at
              fermentum enim pulvinar.
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
      </div>
    );
  }
}

export default UserOffer;
