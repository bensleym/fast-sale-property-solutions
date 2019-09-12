import React, { Component } from "react";
import { Link } from "@reach/router";

class Navigation extends Component {
  render() {
    return (
      <ul className="navigation">
        <Link to="/why-choose-us" className="navigation__link">
          <li className="navigation__item">Why Choose Us</li>
        </Link>
        <Link to="/where-we-can-help" className="navigation__link">
          <li className="navigation__item">Where We Can Help</li>
        </Link>
        <Link to="/get-an-offer" className="navigation__link">
          <li className="navigation__item">Get An Offer</li>
        </Link>
        <Link to="/standards-and-ethics" className="navigation__link">
          <li className="navigation__item">Standards &amp; Ethics</li>
        </Link>
        <Link to="/contact-us" className="navigation__link">
          <li className="navigation__item">Contact Us</li>
        </Link>
      </ul>
    );
  }
}

export default Navigation;
