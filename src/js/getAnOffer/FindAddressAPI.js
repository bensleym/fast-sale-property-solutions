import Ajax from "./../utils/Ajax";

const addressFormRequest = (postcode, house = {}) =>
  Ajax({
    url: `https://api.getAddress.io/find/${postcode}/${house}?api-key=n6JPwf2vzE6tEx16KoCH9g21596&expand=true`,
    method: "GET",
    dataType: "JSON"
  });

export { addressFormRequest as default };
