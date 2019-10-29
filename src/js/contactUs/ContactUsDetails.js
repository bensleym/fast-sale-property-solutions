import React from "react";

const ContactUsDetails = () => {
  return (
    <div className="contact-us-details">
      <h2 className="contact-us-details__title">Write to us:</h2>
      <address className="contact-us-details__address">
        Sunnymeads, <br />
        Hemel Hempstead,
        <br />
        Hertfordshire, <br />
        HP2 6JH
      </address>

      <div className="contact-us-details__phone">
        <h2 className="contact-us-details__title">Call us:</h2>
        <a className="contact-us-details__number" href="tel:07753686480">
          07753 686 480
        </a>
      </div>
    </div>
  );
};

export default ContactUsDetails;
