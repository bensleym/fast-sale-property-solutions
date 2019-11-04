import React, { Component } from "react";
import MetaTags from "react-meta-tags";
import HeroBanner from "../uiComponents/HeroBanner";
import WhyChooseUsContent from "../whyChooseUs/WhyChooseUsContent";

class WhyChooseUs extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Fast Sale Property Solutions - Why Choose Us</title>
          <meta
            name="description"
            content="Fast Sale Property Solutions is one of the fastest growing property investment networks. We can help you sell your home fast for cash."
          />
          <meta
            property="og:title"
            content="Fast Sale Property Solutions - Why Choose Us"
          />
        </MetaTags>
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
        <section>
          <WhyChooseUsContent />
        </section>
      </div>
    );
  }
}

export default WhyChooseUs;
