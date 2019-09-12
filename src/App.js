import React, { useState } from "react";
import { render } from "react-dom";
import Header from "./js/header/Header";
// import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import ContactUs from "./js/views/ContactUs";
import GetAnOffer from "./js/views/GetAnOffer";
import StandardAndEthics from "./js/views/StandardsAndEthics";
import WhereWeCanHelp from "./js/views/WhereWeCanHelp";
import WhyChooseUs from "./js/views/WhyChooseUs";
import Homepage from "./js/views/HomePage";
// import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Header />
        <Router>
          <Homepage path="/" />
          <ContactUs path="/contact-us" />
          <GetAnOffer path="/get-an-offer" />
          <StandardAndEthics path="/standards-and-ethics" />
          <WhereWeCanHelp path="/where-we-can-help" />
          <WhyChooseUs path="why-choose-us" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
