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
                  url="financial-difficulties"
                />
                <SideNavigationLink
                  id="problemsPayingYourMortgage"
                  label="Problems Paying Your Mortgage"
                  url="problems-paying-your-mortgage"
                />
                <SideNavigationLink
                  id="repossession"
                  label="Repossession"
                  url="repossession"
                />
                <SideNavigationLink
                  id="brokenChain"
                  label="Broken Chain"
                  url="broken-chain"
                />
                <SideNavigationLink
                  id="movingAbroad"
                  label="Moving Abroad"
                  url="moving-abroad"
                />
                <SideNavigationLink
                  id="divorce"
                  label="Divorce"
                  url="divorce"
                />
                <SideNavigationLink
                  id="probate"
                  label="Probate"
                  url="probate"
                />
              </ul>
            </div>
            <div className="col-8">
              <Router>
                <FinancialDifficulties path="financial-difficulties" />
                <ProblemsPayingYourMortgage path="problems-paying-your-mortgage" />
                <Divorce path="divorce" />
                <BrokenChain path="broken-chain" />
                <Probate path="probate" />
                <Repossession path="repossession" />
                <MovingAbroad path="moving-abroad" />
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhereWeCanHelpContent;
