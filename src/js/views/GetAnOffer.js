import React, { Component } from "react";

class GetAnOffer extends Component {
  constructor(props) {
    super(props);
  }

  state = this.props.location.state;

  render() {
    console.log(this.state);
    return (
      <div className="get-an-offer">
        <div className="container">
          <h1>Get an offer</h1>
        </div>
      </div>
    );
  }
}

export default GetAnOffer;
