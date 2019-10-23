import React, { Component } from "react";
import UspsHome from "../hompage/UspsHome";
import IntroHome from "../hompage/IntroHome";
import HeroBanner from "../uiComponents/HeroBanner";

class Homepage extends Component {
  render() {
    return (
      <div>
        <HeroBanner
          cssModifier="home"
          title="Fast Sale Property Solutions"
          offerFormDisplay={true}
        >
          <p className="hero-banner__intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            tristique tincidunt mi efficitur suscipit. Nam tristique enim
            ligula, porttitor blandit metus molestie quis. Integer commodo
            sapien justo, at sollicitudin odio dignissim vitae.{" "}
          </p>
        </HeroBanner>
        <UspsHome />
        <IntroHome />
      </div>
    );
  }
}

export default Homepage;
