
const request = require('request');


const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmFjaGVsdmIiLCJhIjoiY2p6aWlscG8wMTVsdTNjcDV2OXN3bmppbiJ9.kieiqo05ymJT63tkMfKrjw&limit=1';

  request({
    url, 
    json: true 
  }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.features.length === 0) {
      callback('Not a valid location! Try another search.', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].geometry.coordinates[1],
        longitude: body.features[0].geometry.coordinates[0],
        location: body.features[0].place_name
      })
    }
  })
};

module.exports = geocode;