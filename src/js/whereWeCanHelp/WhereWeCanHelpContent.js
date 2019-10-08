import React, { Component } from "react";
import SideNavigationLink from "../uiComponents/SideNavigationLink";
import FinancialDifficulties from "./views/FinancialDifficulties";
import ProblemsPayingYourMortgage from "./views/ProblemsPayingYourMortgage";
import Divorce from "./views/Divorce";
import BrokenChain from "./views/BrokenChain";
import Probate from "./views/Probate";
import Repossession from "./views/Repossession";
import MovingAbroad from "./views/MovingAbroad";
import { Router } from "@reach/router";

class WhereWeCanHelpContent extends Component {
  createNavigation() {
    const data = {
      linkOne: {
        id: "linkOne",
        label: "Link One",
        url: "/link-one"
      },
      linkTwo: {
        id: "linkTwo",
        label: "Link Two",
        url: "/link-two"
      }
    };

    return data;
  }

  render() {
    return (
      <div className="where-we-can-help-content">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <ul>
                <SideNavigationLink
                  id="financialDifficulties"
                  label="Financial Diffculties"
                  url="/where-we-can-help/financial-difficulties"
                />
                <SideNavigationLink
                  id="problemsPayingYourMortgage"
                  label="Problems Paying Your Mortgage"
                  url="/where-we-can-help/problems-paying-your-mortgage"
                />
                <SideNavigationLink
                  id="repossession"
                  label="Repossession"
                  url="/where-we-can-help/repossession"
                />
                <SideNavigationLink
                  id="brokenChain"
                  label="Broken Chain"
                  url="/where-we-can-help/broken-chain"
                />
                <SideNavigationLink
                  id="movingAbroad"
                  label="Moving Abroad"
                  url="/where-we-can-help/moving-abroad"
                />
                <SideNavigationLink
                  id="divorce"
                  label="Divorce"
                  url="/where-we-can-help/divorce"
                />
                <SideNavigationLink
                  id="probate"
                  label="Probate"
                  url="/where-we-can-help/probabte"
                />
              </ul>
            </div>
            <div className="col-8">
              <Router>
                <FinancialDifficulties path="/where-we-can-help/" />
                <ProblemsPayingYourMortgage path="/where-we-can-help/" />
                <Divorce path="/where-we-can-help/" />
                <BrokenChain path="/where-we-can-help/" />
                <Probate path="/where-we-can-help/" />
                <Repossession path="/where-we-can-help/" />
                <MovingAbroad path="/where-we-can-help/" />
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhereWeCanHelpContent;
