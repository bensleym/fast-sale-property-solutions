import React from "react";
import HeroBanner from "../uiComponents/HeroBanner";

const OfferAcceptedContent = () => {
  return (
    <div>
      <HeroBanner
        cssModifier="offer-accepted"
        title="We'll Be in Touch"
        offerFormDisplay={false}
      ></HeroBanner>
      <div className="offer-accepted-content container">
        <h1 className="offer-accepted-content__title">
          Your details have been submitted
        </h1>
        <div className="offer-accepted-content__next-steps">
          <h2>We have your details and will be in touch shortly to discuss</h2>
          <p>
            Thank you for submitting your information. We now have everything we
            need for the momment to get the ball rolling. We are now matching
            you with a cash buyer and will be in touch shortly to discuss your
            cash offer and what happens next. There is no obligation to accept
            the cash offer but we are here to help you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferAcceptedContent;
