import React, { Component } from "react";
import HeroBanner from "../uiComponents/HeroBanner";

class StandardAndEthics extends Component {
  render() {
    return (
      <HeroBanner
        cssModifier="standards-and-ethics"
        title="Standards And Ethics"
        offerFormDisplay={false}
      >
        <p className="hero-banner__intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          tristique tincidunt mi efficitur suscipit. Nam tristique enim ligula,
          porttitor blandit metus molestie quis. Integer commodo sapien justo,
          at sollicitudin odio dignissim vitae.{" "}
        </p>
      </HeroBanner>
    );
  }
}

export default StandardAndEthics;
