// Exercise 3.1 - `getIssPosition`
// -----------------------------

// trial 1
const request = require("request-promise");
// Returns the current position of the ISS
const getIssPosition = (lat, lng) => {
  return request("http://api.open-notify.org/iss-now.json")
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return {
        lng: parsedResponse.iss_position.longitude,
        lat: parsedResponse.iss_position.latitude,
      };
    });
};

// write some code..
getIssPosition("").then((result) => console.log(result));
