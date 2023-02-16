const { fetchBreedDescription } = require('./breedFetcher');

let breedName = process.argv.slice(2);

fetchBreedDescription(breedName, (error, description) => {

  if (error === "undefined") {
    return console.log(`Oops! Looks like the breed ${breedName} was not found.`);
  }
  if (error) {

    return console.log("There was an error ", error);

  } else {
    console.log(description);
  }
});