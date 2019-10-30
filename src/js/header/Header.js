import React, { Component } from "react";
import { Link } from "@reach/router";
import LogoSm from "../../img/header/fast-sale-property-solutions-logo-sm-white-alt.png";
import Navigation from "../navigation/Navigation";
import MenuControl from "../utils/MenuControl";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <button
          className="header__menu"
          onClick={() => {
            MenuControl.menuOpen();
          }}
        >
          <span className="fas fa-bars "></span>
        </button>

        <div className="header--flex container">
          <div className="header__logo">
            <Link to="/">
              <img src={LogoSm} alt="Fast Sale Property Solutions" />
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
