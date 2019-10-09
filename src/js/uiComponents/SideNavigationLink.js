import React from "react";
import { Link } from "@reach/router";

const SideNavigationLink = ({ id, label, url }) => {
  return (
    <li className="side-navigation-link">
      <Link to={url} id={id} className="side-navigation-link__link">
        {label}
      </Link>
    </li>
  );
};

export default SideNavigationLink;
