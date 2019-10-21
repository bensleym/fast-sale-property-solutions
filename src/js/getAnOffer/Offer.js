import React, { Component } from "react";
import Firestore from "./../utils/Firestore";

export default class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  componentDidMount() {
    this.submitOfferDetails();
  }

  submitOfferDetails() {
    Firestore.addFirestore(this.state.offerDetails, "contacts");
  }

  render() {
    return (
      <div className="offer">
        <h1>This is your offer</h1>
      </div>
    );
  }
}
