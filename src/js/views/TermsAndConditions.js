import React, { Component } from "react";
import HeroBanner from "../uiComponents/HeroBanner";
import TermsAndConditionsContent from "../termsAndConditions/TermsAndConditionsContent";

class TermsAndConditions extends Component {
  constructor() {
    super();
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <HeroBanner
          cssModifier="terms-and-conditions"
          title="Terms And Conditions"
          offerFormDisplay={false}
        >
          <p className="hero-banner__intro">
            Fast Sale Property Solutions terms and conditions
          </p>
        </HeroBanner>
        <TermsAndConditionsContent />
      </div>
    );
  }
}

export default TermsAndConditions;
