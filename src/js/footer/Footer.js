import React, { Component } from "react";
import { Link } from "@reach/router";
import Logo from "../../img/header/fast-sale-property-solutions-logo-sm-blue-alt.png";
import FooterLegals from "./FooterLegals";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <Link to="/" className="footer__link--logo">
                <img
                  src={Logo}
                  alt="Fast Sale Property Solutions"
                  className="footer__logo"
                />
              </Link>
            </div>
            <div className="col-lg-3 col-sm-12">
              <h3 className="footer__list-title">Quick Links</h3>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <Link to={"/why-choose-us"} className="footer__link">
                    Why Choose Us
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link to={"/where-we-can-help"} className="footer__link">
                    Where We Can Help
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link to={"/get-an-offer"} className="footer__link">
                    Get An Offer
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-12">
              <h3 className="footer__list-title">Company</h3>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <Link to={"/contact-us"} className="footer__link">
                    Contatc Us
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link to={"/standards-and-ethics"} className="footer__link">
                    Standards &amp; Ethics
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <FooterLegals />
      </footer>
    );
  }
}

export default Footer;
