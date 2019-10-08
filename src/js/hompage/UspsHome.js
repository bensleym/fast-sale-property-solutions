import React, { Component } from "react";
import UspBlock from "../uiComponents/UspBlock";

class UspsHome extends Component {
  render() {
    return (
      <div className="container">
        <div className="usps-home">
          <UspBlock icon="far fa-clock">
            <h2 className="usp-block__title">Quick Sale Of Your Property</h2>
            <p className="usp-block__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
              purus sit amet metus semper rutrum.
            </p>
          </UspBlock>

          <UspBlock icon="fas fa-pound-sign">
            <h2 className="usp-block__title">Instant Cash Offer</h2>
            <p className="usp-block__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
              purus sit amet metus semper rutrum.
            </p>
          </UspBlock>

          <UspBlock icon="fas fa-store-alt">
            <h2 className="usp-block__title">No Estate Agents</h2>
            <p className="usp-block__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
              purus sit amet metus semper rutrum.
            </p>
          </UspBlock>

          <UspBlock icon="fas fa-coins">
            <h2 className="usp-block__title">Little Or No Equaity</h2>
            <p className="usp-block__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
              purus sit amet metus semper rutrum.
            </p>
          </UspBlock>
        </div>
      </div>
    );
  }
}

export default UspsHome;
