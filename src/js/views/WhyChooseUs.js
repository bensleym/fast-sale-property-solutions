import React, { Component } from "react";
import HeroBanner from "../uiComponents/HeroBanner";
import WhyChooseUsContent from "../whyChooseUs/WhyChooseUsContent";

class WhyChooseUs extends Component {
  render() {
    return (
      <div>
        <HeroBanner
          cssModifier="why-choose-us"
          title="Why Choose Us"
          offerFormDisplay={false}
        >
          <p className="hero-banner__intro">
            One of the fastest growing property investor networks with solutions
            tailored to meet our clients needs.
          </p>
        </HeroBanner>
        <WhyChooseUsContent />
      </div>
    );
  }
}

export default WhyChooseUs;
