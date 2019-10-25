import Ajax from "./../utils/Ajax";

const contactUsAPI = (data, url = {}) =>
  Ajax({
    url,
    method: "POST",
    data
  });

export { contactUsAPI as default };
