import React, { Component } from "react";
import { Link } from "@reach/router";
import MenuControl from "../utils/MenuControl";

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul className="navigation" id="navigation">
          <li className="navigation__close">
            <button
              className="navigation__close-btn"
              id="menuClose"
              onClick={() => {
                MenuControl.menuClosed();
              }}
            >
              <span className="fas fa-times"></span>
            </button>
          </li>
          <Link
            to="/why-choose-us"
            className="navigation__link"
            onClick={() => {
              MenuControl.menuClosed();
            }}
          >
            <li className="navigation__item">Why Choose Us</li>
          </Link>
          <Link
            to="/where-we-can-help"
            className="navigation__link"
            onClick={() => {
              MenuControl.menuClosed();
            }}
          >
            <li className="navigation__item">Where We Can Help</li>
          </Link>
          <Link
            to="/get-an-offer"
            className="navigation__link"
            onClick={() => {
              MenuControl.menuClosed();
            }}
          >
            <li className="navigation__item">Get An Offer</li>
          </Link>
          <Link
            to="/standards-and-ethics"
            className="navigation__link"
            onClick={() => {
              MenuControl.menuClosed();
            }}
          >
            <li className="navigation__item">Standards &amp; Ethics</li>
          </Link>
          <Link
            to="/contact-us"
            className="navigation__link"
            onClick={() => {
              MenuControl.menuClosed();
            }}
          >
            <li className="navigation__item">Contact Us</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Navigation;
