import React from "react";
import HeroOfferForm from "../hompage/HeroOfferForm";

const cssClasses = cssModifier => {
  return `hero-banner hero-banner--${cssModifier}`;
};

const offerForm = offerFormDisplay => {
  console.log(offerFormDisplay);
  return offerFormDisplay ? <HeroOfferForm /> : "";
};

const HeroBanner = ({ cssModifier, title, offerFormDisplay, children }) => {
  return (
    <div className={cssClasses(cssModifier)}>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1 className="hero-banner__title">{title}</h1>
            {children}
          </div>
          <div className="col-4">{offerForm(offerFormDisplay)}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
