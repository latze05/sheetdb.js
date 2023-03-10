const { api_endpoint } = require("../Config");
const fetch = require("node-fetch");

async function deleteData(connectionString) {
  // Make a request to the API
  return fetch(`${api_endpoint}/${connectionString}/all`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Return the data
      if (data.error) {
        throw new Error(data.error);
      } else {
        return data;
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
}

module.exports = {
  deleteData,
};
