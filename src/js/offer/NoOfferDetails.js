import React, { Component } from "react";
import HeroBanner from "../uiComponents/HeroBanner";
import { navigate } from "@reach/router";

class NoOfferDetails extends Component {
  missingOffer() {
    navigate("/get-an-offer");
  }

  render() {
    return (
      <div>
        <HeroBanner
          cssModifier="offer"
          title="Somehting Went Wrong"
          offerFormDisplay={false}
        ></HeroBanner>
        <div className="offer container">
          <h1 className="offer__title">Theres been a problem</h1>
          <div className="offer__next-steps">
            <h2>Your cash offer seems to be missing!</h2>
            <p>
              It appears that there has been a problem with your cash offer or
              the information required to provide you with a cash offer is
              missing. Use the link below to fill out a simple form to receive
              your cash offer today.
            </p>
            <button
              className="submit-btn__link"
              onClick={e => {
                e.preventDefault();
                this.missingOffer();
              }}
            >
              Get an offer
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NoOfferDetails;
