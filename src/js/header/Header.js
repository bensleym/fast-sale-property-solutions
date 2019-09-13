import React, { Component } from "react";
import { Link } from "@reach/router";
import LogoMd from "../../img/header/fast-sale-property-solutions-logo-md.png";
import LogoSm from "../../img/header/fast-sale-property-solutions-logo-sm.png";
import Navigation from "../navigation/Navigation";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header--flex container">
          <div className="header__logo">
            <Link to="/">
              <img src={LogoMd} alt="Fast Sale Property Solutions" />
            </Link>
          </div>
          <div className="header__navigation">
            <Navigation />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
