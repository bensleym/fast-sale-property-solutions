import React, { Component } from "react";
import HeroBanner from "../uiComponents/HeroBanner";
import PrivacyPolicyContent from "../privacyPolicy/PrivacyPolicyContent";

class PrivacyPolicy extends Component {
  constructor() {
    super();
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <HeroBanner
          cssModifier="privacy-policy"
          title="Privacy Ploicy"
          offerFormDisplay={false}
        >
          <p className="hero-banner__intro">
            Fast Sale Property Solutions privacy policy
          </p>
        </HeroBanner>
        <PrivacyPolicyContent />
      </div>
    );
  }
}

export default PrivacyPolicy;
