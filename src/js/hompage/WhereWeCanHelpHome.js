import React, { Component } from "react";
import { Link } from "@reach/router";
import FullWidthImgSplit from "../uiComponents/FullWidthImgSpit";
import Repossession from "../../img/homepage/repossession.jpg";
import FinancialDifficulties from "../../img/homepage/financial-difficulties.jpg";
import MortgageRepayments from "../../img/homepage/mortgage-repayments.jpg";
import BrokenChain from "../../img/homepage/broken-chain.jpg";
import MovingAbroad from "../../img/homepage/moving-abroad.jpg";
import Divorce from "../../img/homepage/divorce.jpg";
import Probate from "../../img/homepage/probate.jpg";

class WhereWeCanHelpHome extends Component {
  render() {
    return (
      <div className="where-we-can-help-home">
        <div className="container">
          <h2 className="where-we-can-help-home__title">Where We Can Help</h2>

          <FullWidthImgSplit
            image={Repossession}
            imageAlt="Repossesion"
            title="Repossesion"
          >
            Facing repossession can be a scary time. Repossession not only
            affects the present but the future as well. If your facing
            repossession we can help at any stage.{" "}
            <Link to="/where-we-can-help/repossession">Read more...</Link>
          </FullWidthImgSplit>

          <FullWidthImgSplit
            image={FinancialDifficulties}
            imageAlt="Financial Difficulties"
            orderAlt={true}
            title="Financial Difficulties"
          >
            If your Having financial difficulties and need to sell your house,
            then we have cash buyers waiting to buy your property.{" "}
            <Link to="/where-we-can-help/financial-difficulties">
              Read more...
            </Link>
          </FullWidthImgSplit>

          <FullWidthImgSplit
            image={MortgageRepayments}
            imageAlt="Mortgage Agreement"
            title="Problems Paying Your Mortgage"
          >
            Having problems paying your mortgage can be a huge burden, We can
            tailor a solution with lease options to help release you from your
            mortgage payments.{" "}
            <Link to="/where-we-can-help/problems-paying-your-mortgage">
              Read more...
            </Link>
          </FullWidthImgSplit>

          <FullWidthImgSplit
            image={BrokenChain}
            imageAlt="Broken Chain"
            orderAlt={true}
            title="Broken Chain"
          >
            Don&apos;t lose out on your dream home due to a broken chain. We
            have a network of Investors waiting to buy your property for cash.{" "}
            <Link to="/where-we-can-help/broken-chain">Read more...</Link>
          </FullWidthImgSplit>

          <FullWidthImgSplit
            image={MovingAbroad}
            imageAlt="Family waiting at an airport"
            title="Moving Abroad"
          >
            Don&apos;t let your property hold you back from your dream life
            abroad. Or If your already living abroad and the house is struggling
            to sell, we can help.{" "}
            <Link to="/where-we-can-help/moving-abroad">Read more...</Link>
          </FullWidthImgSplit>

          <FullWidthImgSplit
            image={Divorce}
            imageAlt="A couple getting a divorce"
            orderAlt={true}
            title="Divorce"
          >
            Divorce is always difficult, don&apos;t let you property get in the
            way of moving on quickly. Selling your property for cash is quick
            and efficient.{" "}
            <Link to="/where-we-can-help/divorce">Read more...</Link>
          </FullWidthImgSplit>

          <FullWidthImgSplit
            image={Probate}
            imageAlt="Last will in testimate"
            title="Probate"
          >
            Inheriting a property isn&apos;t always a simple process, especially
            if you need to sell the property on quickly to avoid any financial
            responsibility.{" "}
            <Link to="/where-we-can-help/probate">Read more...</Link>
          </FullWidthImgSplit>
        </div>
      </div>
    );
  }
}

export default WhereWeCanHelpHome;
