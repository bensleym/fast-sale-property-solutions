import React, { useState } from "react";
import { render } from "react-dom";
import Header from "./js/header/Header";
import { Router, Link } from "@reach/router";
import ContactUs from "./js/views/ContactUs";
import GetAnOffer from "./js/views/GetAnOffer";
import StandardAndEthics from "./js/views/StandardsAndEthics";
import WhereWeCanHelp from "./js/views/WhereWeCanHelp";
import WhyChooseUs from "./js/views/WhyChooseUs";
import Homepage from "./js/views/HomePage";
import Footer from "./js/footer/Footer";
import Offer from "./js/views/Offer";

window.fsps = {};

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Header />
        <Router primary={false}>
          <Homepage path="/" />
          <ContactUs path="/contact-us" />
          <GetAnOffer path="/get-an-offer" />
          <StandardAndEthics path="/standards-and-ethics" />
          <WhereWeCanHelp path="/where-we-can-help/*" />
          <WhyChooseUs path="why-choose-us" />
          <Offer path="/offer" />
        </Router>
        <Footer />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
