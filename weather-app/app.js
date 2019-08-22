
const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forcast');

const command = process.argv[2];

if (!command) {
  console.log('Please provide an address!');
} else {
  geocode(command, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log('Error', error);
    } 
  
    forecast(latitude, longitude, (error, forcastData) => {
      if (error) {
        return console.log('Error', error)
      }
      console.log(location);
      console.log(forcastData);
  
    })
  })
}
/* 
We know that data is an object, since we used data.longitude,
data.latitude and data.location. 
Therefore we could refactor this in 'geocode' and just use what we replaced
it with now. 
*/


