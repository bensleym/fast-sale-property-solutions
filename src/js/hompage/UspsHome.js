import React, { Component } from "react";
import UspBlock from "../uiComponents/UspBlock";

class UspsHome extends Component {
  render() {
    return (
      <section className="container usps-home">
        <header className="usps-home__header">
          <h2>Benefits of using Fast Sale Property Solutions...</h2>
        </header>
        <div className="usps-home__usps">
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
      </section>
    );
  }
}

export default UspsHome;
