export default class FormControl {
  constructor() {
    this.checkFormForErrors();
  }

  checkFormForErrors() {
    const inputsWithError = document.querySelectorAll("[data-required=true]");
    for (let i = 0; i < inputsWithError.length; i += 1) {
      const inputId = inputsWithError[i].id;
      const inputErrorDom = document.querySelector(
        `[data-form-error=${inputId}]`
      );
      if (!inputsWithError[i].value) {
        inputErrorDom.innerHTML = "*Required";
      }
    }
  }
}
