import React, { Component } from "react";
import { Link } from "@reach/router";

class CookieBanner extends Component {
  handleClick() {
    const banner = document.getElementById("cookieBanner");
    banner.classList.add("cookie-banner--hide");
    banner.classList.remove("cookie-banner--show");
    this.createCookie();
  }

  createCookie() {
    document.cookie = "Consent=true";
  }

  getCookieData() {
    var cookie = `;${document.cookie}`;
    var cookieValue = cookie.split(`;Consent=`);
    if (cookieValue.length == 2)
      return cookieValue
        .pop()
        .split(";")
        .shift();
  }

  cookieBanneDOM() {
    return (
      <div id="cookieBanner" className="cookie-banner cookie-banner--show">
        <div className="cookie-banner__content container">
          <p className="cookie-banner__info">
            We use cookies to help give you the best experience on our site and
            allow us and third parties to tailor your experience. By continuing
            you agree to our <Link to="/cookie-policy">use of cookies.</Link>
          </p>
          <button
            id="cookieBannerBtn"
            className="cookie-banner__btn"
            onClick={() => {
              this.handleClick();
            }}
          >
            Accept
          </button>
        </div>
      </div>
    );
  }
  render() {
    if (!this.getCookieData()) {
      return this.cookieBanneDOM();
    }
    return null;
  }
}

export default CookieBanner;
