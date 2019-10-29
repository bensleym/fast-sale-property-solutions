import React, { Component } from "react";
import InputRow from "../uiComponents/InputRow";
import TextareaRow from "../uiComponents/TextareaRow";
import SubmitBtn from "../uiComponents/SubmitBtn";
import FormControl from "../utils/FormControl";
import ContactUsAPI from "./ContactUsAPI";
import SubmitControlDisable from "../utils/SubmitControlDisable";
import ContactFormSuccess from "./ContactFormSuccess";
import SubmitControlEnable from "../utils/SubmitControlEnable";

class ContactUsForm extends Component {
  state = {};
  async handleSubmit(e) {
    new FormControl();
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const phone = document.getElementById("contactPhone").value;
    const message = document.getElementById("contactMessage").value;

    const url = `https://us-central1-fast-sale-property-solutions.cloudfunctions.net/sendMail`;
    const data = {
      name,
      email,
      phone,
      message
    };

    if (window.fsps.formValid) {
      SubmitControlDisable(e);

      await ContactUsAPI(data, url)
        .then(() => {
          this.setState({ contactFormSuccess: true });
        })
        .catch(() => {
          SubmitControlEnable();
          this.setState({ contactFormError: true });
        });
    }
  }

  formAlert() {
    if (this.state.contactFormError) {
      return (
        <div className="contact-us-form__alert alert alert-danger">
          There was a problem sending your message. Please try again later or
          call us on: <strong>07753 686 480</strong>
        </div>
      );
    }
    return null;
  }

  contactForm() {
    return (
      <div className="contact-us-form">
        <h2 className="contact-us-form__title">Send Us A Message</h2>
        {this.formAlert()}
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
    if (this.state.contactFormSuccess) {
      return ContactFormSuccess();
    }
    return this.contactForm();
  }
}

export default ContactUsForm;
