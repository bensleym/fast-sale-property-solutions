import React, { Component } from "react";
import MetaTags from "react-meta-tags";
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
        <MetaTags>
          <title>Fast Sale Property Solutions - Cookie Policy</title>
          <meta
            name="description"
            content="Fast Sale Property Solutions cookie policy and how we use cookies to improve the user experience."
          />
          <meta
            property="og:title"
            content="Fast Sale Property Solutions - Cookie Policy"
          />
        </MetaTags>
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
