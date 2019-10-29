const SubmitControlEnable = () => {
  const btn = document.querySelectorAll("button");
  spinner();
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].disabled = false;
  }
};

const spinner = () => {
  const submitBtn = document.getElementById("sendingSpinner");
  submitBtn.classList.remove("submit-btn__btn--sending");
  submitBtn.classList.add("submit-btn__btn--no-send");
};

export default SubmitControlEnable;
