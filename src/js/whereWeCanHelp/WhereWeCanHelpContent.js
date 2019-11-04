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
import FormCTAMini from "../uiComponents/FormCTAMini";

class WhereWeCanHelpContent extends Component {
  render() {
    return (
      <div className="where-we-can-help-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <SideNavigation />
              <FormCTAMini sticky={true} />
            </div>
            <section className="where-we-can-help-content__info col-lg-8 col-sm-12">
              <Router>
                <WhereWeCanHelpHome path="/" />
                <Repossession path="repossession" />
                <FinancialDifficulties path="financial-difficulties" />
                <Divorce path="divorce" />
                <ProblemsPayingYourMortgage path="problems-paying-your-mortgage" />
                <BrokenChain path="broken-chain" />
                <Probate path="probate" />
                <MovingAbroad path="moving-abroad" />
              </Router>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default WhereWeCanHelpContent;
