import React from "react";
import { Link } from "@reach/router";

const StandardsAndEthicsContent = () => {
  return (
    <article className="standards-and-ethics-content container">
      <h2>Fast Sale Property Solutions and our standards and ethics. </h2>

      <p>
        At Fast Sale Property Solutions we pride ourselves on our standards and
        ethics. We treat each individual case with sensitivity and
        understanding.
      </p>

      <p>
        We will be professional at all times and treat our clients with
        courteous.
      </p>

      <p>
        We never want you to feel in the dark during the process. We will always
        be transparent and upfront with the buying process, involving you in
        every step along the way.
      </p>

      <p>
        We never want our clients to feel like they aren’t getting a good deal.
        This is why we tailor every single deal to the individual client
        ensuring we deliver a win / win solution.
      </p>

      <p>
        We will be with you every step of the way and will be on hand to answer
        any questions you may have. We will never disguise an offer with costly
        terms and hidden charges.
      </p>

      <p>
        Once the offer has been delivered in writing we will not make any
        changes to this offer prior to completion. This is to ensure peace of
        mind during the process.
      </p>

      <p>
        Our service is free of charge including the valuation. This means that
        you will not be charged any fees unless there are exceptional
        circumstances.
      </p>

      <p>
        The completion date is of the utmost importance and we will everything
        we can to work towards our agreed completion date.
      </p>

      <p>
        Most importantly we will be flexible to accommodate the needs of our
        clients and work closely together to achieve the best outcome.
      </p>

      <p>
        If you have any questions or feedback,{" "}
        <Link to="/contact-us">contact us today.</Link>
      </p>
    </article>
  );
};

export default StandardsAndEthicsContent;
