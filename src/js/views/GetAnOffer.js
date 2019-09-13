import React, { Component } from "react";

class GetAnOffer extends Component {
  constructor(props) {
    super(props);
  }

  state = this.props.location.state;

  render() {
    console.log(this.state);
    return <h1>Get An Offer</h1>;
  }
}

export default GetAnOffer;
