export default class FormErrorHandling {
  constructor() {
    this.handleInputError();
    this.handleCheckboxError();
  }
  handleInputError() {
    const textInput = document.querySelectorAll("[data-form-control]");
    for (let i = 0; i < textInput.length; i += 1) {
      const inputId = textInput[i].id;
      const inputErrorDom = document.querySelector(
        `[data-form-error=${inputId}]`
      );
      textInput[i].addEventListener("blur", () => {
        if (textInput[i].value) {
          textInput[i].setAttribute("data-required", "false");
          inputErrorDom.innerHTML = "";
        } else {
          textInput[i].setAttribute("data-required", "true");
          inputErrorDom.innerHTML = "*Required";
        }
      });
    }
  }

  handleCheckboxError() {
    const checkboxInput = document.querySelectorAll(
      "[data-form-control-checkbox]"
    );

    for (let i = 0; i < checkboxInput.length; i += 1) {
      const checkboxId = checkboxInput[i].id;
      const checkboxErrorDom = document.querySelector(
        `[data-form-error=${checkboxId}]`
      );
      checkboxInput[i].addEventListener("change", () => {
        if (checkboxInput[i].checked) {
          checkboxInput[i].setAttribute("data-required", "false");
          checkboxErrorDom.innerHTML = "";
        } else {
          checkboxInput[i].setAttribute("data-required", "true");
          checkboxErrorDom.innerHTML = "*Required";
        }
      });
    }
  }
}
