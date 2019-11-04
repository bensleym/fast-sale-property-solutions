import React, { Component } from "react";
import MetaTags from "react-meta-tags";
import UspsHome from "../hompage/UspsHome";
import IntroHome from "../hompage/IntroHome";
import HeroBanner from "../uiComponents/HeroBanner";

class Homepage extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Fast Sale Property Solutions - Sell Your Property Fast</title>
          <meta
            name="description"
            content="Fast Sale Property Solutions have multiple solutions to sell your property fast. We have a large a network of cash buyers ready to buy your home fast."
          />
          <meta
            property="og:title"
            content="Fast Sale Property Solutions - Sell Your Property Fast"
          />
        </MetaTags>
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
