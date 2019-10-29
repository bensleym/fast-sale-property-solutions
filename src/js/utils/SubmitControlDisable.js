const SubmitControlDisable = event => {
  spinner();
  const submitBtn = event.currentTarget;
  const btn = submitBtn.querySelectorAll("button");
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].disabled = true;
  }
};

const spinner = () => {
  const submitBtn = document.getElementById("sendingSpinner");
  submitBtn.classList.remove("submit-btn__btn--no-send");
  submitBtn.classList.add("submit-btn__btn--sending");
};

export default SubmitControlDisable;
