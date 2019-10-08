import React, { Component } from "react";
import WhereWeCanHelpHero from "../whereWeCanHelp/WhereWeCanHelpHero";
import WhereWeCanHelpContent from "../whereWeCanHelp/WhereWeCanHelpContent";

class WhereWeCanHelp extends Component {
  render() {
    return (
      <div>
        <WhereWeCanHelpHero />
        <WhereWeCanHelpContent />
      </div>
    );
  }
}

export default WhereWeCanHelp;
