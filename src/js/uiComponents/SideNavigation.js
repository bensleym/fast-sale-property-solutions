import React from "react";
import SideNavigationLink from "./SideNavigationLink";

const SideNavigation = () => {
  return (
    <nav>
      <ul className="side-navigation">
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
        <SideNavigationLink id="divorce" label="Divorce" url="divorce" />
        <SideNavigationLink id="probate" label="Probate" url="probate" />
      </ul>
    </nav>
  );
};

export default SideNavigation;
