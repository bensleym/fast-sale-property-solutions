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
              Once an offer has been agreed we aim to complete in 28 days with
              no fees.
            </p>
          </UspBlock>

          <UspBlock icon="fas fa-pound-sign">
            <h2 className="usp-block__title">Instant Cash Offer</h2>
            <p className="usp-block__text">
              Fill out our simple form to get an instant no obligation cash
              offer.
            </p>
          </UspBlock>

          <UspBlock icon="fas fa-store-alt">
            <h2 className="usp-block__title">No Estate Agents</h2>
            <p className="usp-block__text">
              No expensive estate agent fees and no waiting to sell your
              property.
            </p>
          </UspBlock>

          <UspBlock icon="fas fa-coins">
            <h2 className="usp-block__title">Little Or No Equity</h2>
            <p className="usp-block__text">
              We can still help you if you have little or no equity. We can
              tailor a solution to suit your circumstances.
            </p>
          </UspBlock>
        </div>
      </section>
    );
  }
}

export default UspsHome;
