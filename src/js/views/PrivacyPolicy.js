import React, { Component } from "react";
import MetaTags from "react-meta-tags";
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
        <MetaTags>
          <title>Fast Sale Property Solutions - Privacy Policy</title>
          <meta
            name="description"
            content="Fast Sale Property Solutions privacy policy"
          />
          <meta
            property="og:title"
            content="Fast Sale Property Solutions - Privacy Policy"
          />
        </MetaTags>
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
