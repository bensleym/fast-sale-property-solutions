import $ from "jquery";

$.ajaxSetup({
  cache: true,
  beforeSend: addCsrfTokenToAjax
});

function addCsrfTokenToAjax(xhr, settings) {
  const checkRequestMethod = method =>
    ["POST", "PUT", "DELETE"].indexOf(method) > -1;
  const isExternalURL = url => /^http:.*/.test(url) || /^https:.*/.test(url);

  if (checkRequestMethod(settings.method) && !isExternalURL(settings.url)) {
    // Only send the token to relative URLs i.e. locally.
    xhr.setRequestHeader(window.od.csrfHeader, window.od.csrfToken);
  }
}

function externalRequest(settings) {
  return new Promise((resolve, reject) => {
    $.ajax(settings)
      .done((data, textStatus, jqXHR) => {
        const { status, statusText } = jqXHR;

        resolve({
          data,
          status,
          statusText
        });
      })
      .fail(reject);
  });
}

const Ajax = (settings = {}) => externalRequest(settings);

Ajax.get = (url, data = {}) => {
  const options = {
    method: "GET",
    url,
    data
  };
  return externalRequest(options);
};

Ajax.post = (url, data = {}) => {
  const options = {
    method: "POST",
    url,
    data
  };
  return externalRequest(options);
};

Ajax.external = externalRequest;

export default Ajax;
