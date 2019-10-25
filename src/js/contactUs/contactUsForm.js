import React, { Component } from "react";
import InputRow from "../uiComponents/InputRow";
import TextareaRow from "../uiComponents/TextareaRow";
import SubmitBtn from "../uiComponents/SubmitBtn";
import FormControl from "../utils/FormControl";
import contactUsAPI from "./contactUsAPI";
import SubmitControlDisable from "../utils/SubmitControlDisable";

class ContactUsForm extends Component {
  async handleSubmit(e) {
    new FormControl();
    const emailSendTo = "mark@fastsalepropertysolutions.co.uk";
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const phone = document.getElementById("contactPhone").value;
    const message = document.getElementById("contactMessage").value;

    const url = `https://us-central1-fast-sale-property-solutions.cloudfunctions.net/sendMail?`;
    const data = {
      name,
      email,
      phone,
      message
    };

    if (window.fsps.formValid) {
      SubmitControlDisable(e);
      await contactUsAPI(data, url)
        .then(({ data }) => {
          console.log(data);
        })
        .catch(() => {
          console.log("fail");
        });
    }
  }
  contactForm() {
    return (
      <div className="contact-us-form container">
        <h2 className="contact-us-form__title">Send Us A Message</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit(e);
          }}
          onChange={e => {
            e.preventDefault();
          }}
          name="contactForm"
          id="contactForm"
        >
          <InputRow
            id="contactName"
            type="text"
            label="Name"
            value=""
            required={true}
          />

          <InputRow
            id="contactEmail"
            type="text"
            label="Email"
            value=""
            required={true}
          />

          <InputRow
            id="contactPhone"
            type="text"
            label="Phone Number"
            value=""
            required={true}
          />

          <TextareaRow
            id="contactMessage"
            label="Enter Your Message"
            value=""
            required={true}
          />

          <SubmitBtn value="Send" id="contactSubmitBtn" />
        </form>
      </div>
    );
  }
  render() {
    return this.contactForm();
  }
}

export default ContactUsForm;
