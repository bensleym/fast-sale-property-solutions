import React, { Component } from "react";
import InputRow from "../uiComponents/InputRow";
import SubmitBtn from "../uiComponents/SubmitBtn";
import { navigate } from "@reach/router";

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
        <div className="col-6">
          <h1>Fast Sale Property Solutions</h1>
        </div>
        <div className="col-6">
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
            <InputRow
              id="email"
              type="text"
              label="Email"
              placeHolder="Email"
            />

            <SubmitBtn value="Get me and offer" />
          </form>
        </div>
      </div>
    );
  }
}

export default HeroHome;
