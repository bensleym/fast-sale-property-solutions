const SubmitControlDisable = event => {
  const submitBtn = event.currentTarget;
  const btn = submitBtn.querySelectorAll("button");
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].disabled = true;
  }
};

export default SubmitControlDisable;
