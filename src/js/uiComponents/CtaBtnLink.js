import React from "react";
import { Link } from "@reach/router";

const CtaBtnLink = ({ children }) => {
  return (
    <Link to="/get-an-offer" className="cta-btn-link">
      {children}
    </Link>
  );
};

export default CtaBtnLink;
