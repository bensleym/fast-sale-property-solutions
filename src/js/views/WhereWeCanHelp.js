import React, { Component } from "react";
import WhereWeCanHelpContent from "../whereWeCanHelp/WhereWeCanHelpContent";
import HeroBanner from "../uiComponents/HeroBanner";

class WhereWeCanHelp extends Component {
  render() {
    return (
      <div>
        <HeroBanner
          cssModifier="where-we-can-help"
          title="Where We Can Help"
          offerFormDisplay={false}
        >
          <p className="hero-banner__intro">
            If your looking to sell your property fast, then we can help. We can
            tailor solutions to meet your needs no matter what your reason for
            selling is.
          </p>
        </HeroBanner>
        <WhereWeCanHelpContent />
      </div>
    );
  }
}

export default WhereWeCanHelp;
