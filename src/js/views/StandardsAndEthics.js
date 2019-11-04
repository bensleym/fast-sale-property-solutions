import React, { Component } from "react";
import HeroBanner from "../uiComponents/HeroBanner";
import StandardsAndEthicsContent from "../standardsAndEthics/StandardsAndEthicsContent";

class StandardAndEthics extends Component {
  render() {
    return (
      <div>
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
