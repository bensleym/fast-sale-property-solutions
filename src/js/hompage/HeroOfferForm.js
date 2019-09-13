import React, { Component } from "react";
import InputRow from "../uiComponents/InputRow";
import SubmitBtn from "../uiComponents/SubmitBtn";
import { navigate } from "@reach/router";

class HeroOfferForm extends Component {
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
      <div className="hero-offer-form">
        <h2 className="hero-offer-form__title">Get an instant quote today</h2>
        <p className="hero-offer-form__form-info">
          Simply fill out the form below to get started.
        </p>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
          }}
          onChange={e => {
            this.handleOnChange(e);
          }}
        >
          <InputRow id="name" type="text" label="Name" placeHolder="Name" />
          <InputRow
            id="phone"
            type="number"
            label="Phone"
            placeHolder="Phone number"
          />
          <InputRow id="email" type="text" label="Email" placeHolder="Email" />

          <SubmitBtn value="Get an offer" />
        </form>
      </div>
    );
  }
}

export default HeroOfferForm;
