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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            tristique tincidunt mi efficitur suscipit. Nam tristique enim
            ligula, porttitor blandit metus molestie quis. Integer commodo
            sapien justo, at sollicitudin odio dignissim vitae.{" "}
          </p>
        </HeroBanner>
        <WhereWeCanHelpContent />
      </div>
    );
  }
}

export default WhereWeCanHelp;
