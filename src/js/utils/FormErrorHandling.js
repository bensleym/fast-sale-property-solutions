export default class FormErrorHandling {
  constructor() {
    this.removeInputError();
  }
  removeInputError() {
    const textInput = document.querySelectorAll("[data-form-control]");
    for (let i = 0; i < textInput.length; i += 1) {
      const inputId = textInput[i].id;
      const inputErrorDom = document.querySelector(
        `[data-form-error=${inputId}]`
      );
      textInput[i].addEventListener("change", () => {
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
}
