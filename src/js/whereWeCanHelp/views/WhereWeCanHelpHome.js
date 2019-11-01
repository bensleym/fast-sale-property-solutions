import React from "react";
import { Link } from "@reach/router";

const WhereWeCanHelpHome = () => {
  return (
    <div>
      <h1>A solution to meet all needs</h1>
      <p>
        There are multiple reasons for needing to sell your property fast. Some
        of these reasons could be down to financial difficulties that were
        forced upon you to divorce or repossession.
      </p>

      <p>
        We have experience dealing with all kinds of situations. We understand
        that it’s a difficult time but there’s no need to feel embarrassed about
        your situation. Take a look at are articles to see how we can help you
        out of your situation.
      </p>

      <p>
        <Link to="/contact-us">Contact us</Link> today for a free confidential
        chat to discuss your possible solution.
      </p>
    </div>
  );
};

export default WhereWeCanHelpHome;
