import React, { Component } from "react";
import HeroHome from "../hompage/HeroHome";
import UspsHome from "../hompage/UspsHome";
import IntroHome from "../hompage/IntroHome";

class Homepage extends Component {
  render() {
    return (
      <div>
        <HeroHome />
        <UspsHome />
        <IntroHome />
      </div>
    );
  }
}

export default Homepage;
