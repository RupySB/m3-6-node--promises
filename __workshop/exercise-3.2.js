// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();
console.log(process.env["OPENCAGE_API_KEY"]);

const getPositionFromAddress = (address) => {
  const openCageObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  return opencage.geocode(openCageObj).then((response) => {
    return response.results[0].geometry; //remove.geometry or results to get it
  });
};

getPositionFromAddress(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((response) => console.log(response));
