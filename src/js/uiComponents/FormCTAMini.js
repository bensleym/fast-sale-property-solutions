import React, { Component } from "react";
import { navigate } from "@reach/router";

class FormCTAMini extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const formRef = document.getElementById("formCTAMini");
    this.formPosition(formRef);
  }

  formPosition(formPos) {
    const formEl = formPos;
    let offsetTop = 0;
    while (formPos) {
      offsetTop += formPos.offsetTop;
      formPos = formPos.offsetParent;
    }
    const pos = offsetTop;

    this.props.sticky ? this.formOnScroll(formEl, pos) : "";
  }

  formOnScroll(formEl, pos) {
    window.onscroll = () => {
      if (window.pageYOffset >= pos) {
        formEl.classList.add("form-cta-mini--fixed");
      } else if (window.pageYOffset < pos) {
        formEl.classList.remove("form-cta-mini--fixed");
      }
    };
  }

  handleClick() {
    navigate("/get-an-offer");
  }

  render() {
    return (
      <div id="formCTAMini" className="form-cta-mini">
        <h3>Get an instant cash offer today</h3>
        <button
          className="submit-btn__btn"
          onClick={() => {
            this.handleClick();
          }}
        >
          Get an offer
        </button>
      </div>
    );
  }
}

export default FormCTAMini;
