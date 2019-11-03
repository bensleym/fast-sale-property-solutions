import React, { Component } from "react";
import HeroBanner from "../uiComponents/HeroBanner";
import ContactUsForm from "../contactUs/ContactUsForm";
import ContactUsDetails from "../contactUs/ContactUsDetails";

class ContactUs extends Component {
  constructor() {
    super();
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <HeroBanner
          cssModifier="contact-us"
          title="Contact Us"
          offerFormDisplay={false}
        >
          <p className="hero-banner__intro">
            If you&apos;ve got any questions or wish to discuss your situation
            and see how we can help you, then simply call us, write to us or
            fill out the contact form below and we will get back to you.
          </p>
        </HeroBanner>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <ContactUsDetails />
            </div>
            <div className="col-lg-8 col-sm-12">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
