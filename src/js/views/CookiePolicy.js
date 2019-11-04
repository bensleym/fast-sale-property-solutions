import React, { Component } from "react";
import HeroBanner from "../uiComponents/HeroBanner";
import CookiePolicyContent from "../cookiePolicy/CookiePolicyContent";

class CookiePolicy extends Component {
  constructor() {
    super();
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <HeroBanner
          cssModifier="cookie-policy"
          title="Cookie Ploicy"
          offerFormDisplay={false}
        >
          <p className="hero-banner__intro">
            Fast Sale Property Solutions cookie policy
          </p>
        </HeroBanner>
        <CookiePolicyContent />
      </div>
    );
  }
}

export default CookiePolicy;
