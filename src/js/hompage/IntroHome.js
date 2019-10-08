import React, { Component } from "react";
import CtaBtnLink from "../uiComponents/CtaBtnLink";

class IntroHome extends Component {
  render() {
    return (
      <div className="intro-home">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="intro-home__content">
                <h2 className="intro-home__title">
                  Get A No Oblidation Instant Cash Offer Today
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  a purus sit amet metus semper rutrum. Integer purus orci,
                  lacinia in sem non, ultrices rhoncus erat.{" "}
                </p>
                <p>
                  Cras et ligula rhoncus, tristique massa eget, vulputate odio.
                  Donec in nisl ac turpis consectetur scelerisque. Vestibulum
                  placerat purus vel cursus sagittis. Nunc et suscipit augue.
                  Pellentesque aliquam libero id nibh consequat vulputate.
                </p>{" "}
                <p>
                  Phasellus vehicula neque ut massa porta porta. Donec in
                  suscipit lacus. Aliquam at condimentum quam. Donec iaculis
                  turpis arcu, nec fringilla nisl gravida sed. Donec iaculis
                  dolor eget ullamcorper ultrices. Etiam bibendum ut velit sit
                  amet faucibus. Mauris mi mi, egestas id nulla nec,
                  pellentesque consequat ante. In eleifend consectetur risus.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="intro-home__content">
                <h2 className="intro-home__title">What To Expect From Us</h2>
                <ul className="intro-home__list">
                  <li className="intro-home__list-item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="intro-home__list-item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="intro-home__list-item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="intro-home__list-item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="intro-home__list-item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="intro-home__list-item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="intro-home__list-item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>

                <CtaBtnLink>Get an offer</CtaBtnLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroHome;
