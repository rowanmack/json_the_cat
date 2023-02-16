const request = require('request');

const fetchBreedDescription = (breed, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

    if (error) {

      return callback(error, null);
    }

    const data = JSON.parse(body);

    if (data[0] === undefined) {

      return callback("undefined", null);
    }

    if (response.statusCode === 200) {

      callback(null, data[0].description);
    }
  });
};


module.exports = { fetchBreedDescription };
