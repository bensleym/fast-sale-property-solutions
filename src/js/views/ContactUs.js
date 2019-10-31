import React, { Component } from "react";
import HeroBanner from "../uiComponents/HeroBanner";
import ContactUsForm from "../contactUs/ContactUsForm";
import ContactUsDetails from "../contactUs/ContactUsDetails";

class ContactUs extends Component {
  render() {
    return (
      <div>
        <HeroBanner
          cssModifier="contact-us"
          title="Contact Us"
          offerFormDisplay={false}
        >
          <p className="hero-banner__intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            tristique tincidunt mi efficitur suscipit. Nam tristique enim
            ligula, porttitor blandit metus molestie quis. Integer commodo
            sapien justo, at sollicitudin odio dignissim vitae.{" "}
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
