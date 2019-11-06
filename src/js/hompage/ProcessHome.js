import React, { Component } from "react";
import Process from "../uiComponents/Process";

class ProcessHome extends Component {
  render() {
    return (
      <div className="container">
        <div className="process-home">
          <h2 className="process-home__title">How it works</h2>
          <div className="process-home__content">
            <div className="process-home__item">
              <Process
                title="Get an instant no obligation cash offer"
                number="1"
              >
                Simply complete our online form with your details and property
                details to get your instant cash offer today
              </Process>
            </div>
            <div className="process-home__item">
              <Process title="Accept the preliminary cash offer" number="2">
                If you are happy with your pelimery cash offer click the button
                and we will call you to discuss your offer. There is still no
                obligation after accepting the preliminary offer.
              </Process>
            </div>
            <div className="process-home__item">
              <Process title="Tailoring the solution" number="3">
                We will call you to discuss your offer and situation, then
                tailor the solution for the best possible offer.
              </Process>
            </div>
            <div className="process-home__item">
              <Process title="Viewing your property" number="4">
                Once both parties are happy with the solution, we will then come
                and view your property.
              </Process>
            </div>
            <div className="process-home__item">
              <Process title="The written offer and completion" number="5">
                After the viewing we will then put together the final cash
                offer. This will then be given to you in writing. Once you
                accept the written offer we will aim to complete on your
                property within 28 days.
              </Process>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProcessHome;
