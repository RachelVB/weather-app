
const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/ef4697c793883a5523217d1c21cc8c4e/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si';

  request({ 
    url, 
    json: true 
    /* By setting an object of (lowercase) json to 'true', 
    this will parse our data so we don't have to write another line of code. */
    }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Not a valid location! Try another search.', undefined)
    } else {
      callback(undefined, 
        body.daily.data[0].summary + ' It is currently ' + 
        body.currently.temperature + ' degrees out. There is a ' + 
        body.currently.precipProbability + '% chance of rain.'
      )
    }
  })
};

module.exports = forecast;