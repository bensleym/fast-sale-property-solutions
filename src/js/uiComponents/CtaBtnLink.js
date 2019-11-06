import React from "react";
import { Link } from "@reach/router";

const CtaBtnLink = ({ displayInline, children }) => {
  const cssStyles = displayInline
    ? "cta-btn-link cta-btn-link--inline"
    : "cta-btn-link";

  return (
    <Link to="/get-an-offer" className={cssStyles}>
      {children}
    </Link>
  );
};

export default CtaBtnLink;
