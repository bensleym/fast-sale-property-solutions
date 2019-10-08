import React, { Component } from "react";
import InputRow from "../uiComponents/InputRow";
import SubmitBtn from "../uiComponents/SubmitBtn";
import { navigate } from "@reach/router";
import HeroOfferForm from "./HeroOfferForm";
import UspBlock from "../uiComponents/UspBlock";

class HeroHome extends Component {
  state = { redirect: false, name: "", phone: "", email: "" };

  handleSubmit() {
    this.setState({ redirect: true });
    navigate("/get-an-offer", { state: this.state });
  }

  handleOnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="hero-home">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1 className="hero-home__title">Fast Sale Property Solutions</h1>
              <p className="hero-home__intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse tristique tincidunt mi efficitur suscipit. Nam
                tristique enim ligula, porttitor blandit metus molestie quis.
                Integer commodo sapien justo, at sollicitudin odio dignissim
                vitae.{" "}
              </p>
            </div>
            <div className="col-4">
              <HeroOfferForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroHome;
