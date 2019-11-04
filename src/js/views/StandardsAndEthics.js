import React, { Component } from "react";
import MetaTags from "react-meta-tags";
import HeroBanner from "../uiComponents/HeroBanner";
import StandardsAndEthicsContent from "../standardsAndEthics/StandardsAndEthicsContent";

class StandardAndEthics extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Fast Sale Property Solutions - Standards And Ethics</title>
          <meta
            name="description"
            content="At Fast Sale Property Solutions we pride ourselves on our standards and ethics and the way we treat our clients."
          />
          <meta
            property="og:title"
            content="Fast Sale Property Solutions - Standards And Ethics"
          />
        </MetaTags>
        <HeroBanner
          cssModifier="standards-and-ethics"
          title="Standards And Ethics"
          offerFormDisplay={false}
        >
          <p className="hero-banner__intro">
            We at Fast Sale Proprty Solutions pride ourselves on our standards
            and ethics and how we work directly and cloesly with our clients to
            achieve the best possible solution.
          </p>
        </HeroBanner>
        <StandardsAndEthicsContent />
      </div>
    );
  }
}

export default StandardAndEthics;
