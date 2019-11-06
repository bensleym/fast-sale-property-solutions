import React, { Component } from "react";
import CtaBtnLink from "../uiComponents/CtaBtnLink";

class IntroHome extends Component {
  render() {
    return (
      <div className="intro-home">
        <div className="container">
          <div className="intro-home__content">
            <h2 className="intro-home__title">
              Get A No Obligation Instant Cash Offer Today
            </h2>
            <p>
              It’s never been easier to sell your property and get an instant no
              obligation cash offer. Simply fill out our quick offer form and
              you’ll get your instant cash offer. Once you have your cash offer
              it’s up to you if you want to take it any further.
            </p>

            <p>
              Our service comes with no fees and our aim once an offer in
              writing has been accepted is to complete within 28 days.
            </p>

            <p>
              There are many reasons to sell your home and we can tailor a
              solution to meet your needs. We will work closely with you and be
              upfront all the way to give you peace of mind throughout the
              process.
            </p>
            <CtaBtnLink displayInline={true}>Get an offer</CtaBtnLink>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroHome;
