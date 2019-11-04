import React, { Component } from "react";
import MetaTags from "react-meta-tags";
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
        <MetaTags>
          <title>Fast Sale Property Solutions - Terms And Conditions</title>
          <meta
            name="description"
            content="Fast Sale Property Solutions Terms And Conditions"
          />
          <meta
            property="og:title"
            content="Fast Sale Property Solutions - Terms And Conditions"
          />
        </MetaTags>
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
