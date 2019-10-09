import React, { Component } from "react";
import FinancialDifficulties from "./views/FinancialDifficulties";
import ProblemsPayingYourMortgage from "./views/ProblemsPayingYourMortgage";
import Divorce from "./views/Divorce";
import BrokenChain from "./views/BrokenChain";
import Probate from "./views/Probate";
import Repossession from "./views/Repossession";
import MovingAbroad from "./views/MovingAbroad";
import { Router } from "@reach/router";
import SideNavigation from "../uiComponents/SideNavigation";
import WhereWeCanHelpHome from "./views/WhereWeCanHelpHome";

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
              <SideNavigation />
            </div>
            <div className="where-we-can-help-content__info col-8">
              <Router primary={false}>
                <WhereWeCanHelpHome path="/" />
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
