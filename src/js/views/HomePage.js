import React, { Component } from "react";
import MetaTags from "react-meta-tags";
import UspsHome from "../hompage/UspsHome";
import IntroHome from "../hompage/IntroHome";
import HeroBanner from "../uiComponents/HeroBanner";
import ProcessHome from "../hompage/ProcessHome";
import WhereWeCanHelpHome from "../hompage/WhereWeCanHelpHome";

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
        />
        <UspsHome />
        <IntroHome />
        <WhereWeCanHelpHome />
        <ProcessHome />
      </div>
    );
  }
}

export default Homepage;
