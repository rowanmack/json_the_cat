const request = require('request');

const breedFetcher = (breed) => {

  breed = process.argv.slice(2);

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

    if (error) {
      return console.log(`Sorry, there was an error. Error: ${error}`);
    }

    const data = JSON.parse(body);

    if (data[0] === undefined) {
      return console.log(`Oops! Looks like the breed ${breed} was not found `);
    }

    if (response.statusCode === 200) {

      console.log(data[0].description);

    }
  });
};

breedFetcher();