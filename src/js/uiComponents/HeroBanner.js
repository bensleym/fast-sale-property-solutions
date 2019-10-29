import React, { Component } from "react";
import HeroOfferForm from "../hompage/HeroOfferForm";
import OfferBox from "../offer/OfferBox";

class HeroBanner extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  cssClasses() {
    return `hero-banner hero-banner--${this.props.cssModifier}`;
  }

  offerForm() {
    return this.props.offerFormDisplay ? <HeroOfferForm /> : "";
  }

  offerBox() {
    return this.props.offerBox ? (
      <OfferBox offerDetails={this.props.offerDetails} />
    ) : (
      ""
    );
  }

  render() {
    return (
      <div className={this.cssClasses()}>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1 className="hero-banner__title">{this.props.title}</h1>
              {this.props.children}
            </div>
            <div className="col-4">
              {this.offerForm()}
              {this.offerBox()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroBanner;
