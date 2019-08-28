
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forcast');

const port = process.env.PORT || 3000;

const app = express();

// Define paths for express config.
const publicDir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// This is how we integrate handlebars with express. 
// Please note that we installed hbs using npm i hbs

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
/* 
By using app.use with a static page leading to index.html, this will automatically provide us
with the homepage without using app.get('', (req, res) => {....
  We can remove the homepage app.get function as commented out below. 
*/
//Setup static directory to serve
app.use(express.static(publicDir));

/* app.get('', (req, res) => {
  res.send('<h1>Weather</h1>');
}); */

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather app',
    name: 'RachelVB'
  })
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me!',
    name: 'RachelVB'
  })
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Message!',
    helpMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quidem velit quaerat ea consequatur minus provident maxime quia sed qui optio, asperiores vero numquam pariatur. Commodi omnis est quo tempora?',
    name: 'RachelVB'
  })
});


app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address!'
    })
  }
  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({error});
    } 
    forecast(latitude, longitude, (error, forcastData) => {
      if (error) {
        return res.send({error});
      }
      res.send({
        forecast: forcastData,
        location: location,
        address: req.query.address
      })
    })
  })
});


app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term!'
    })
  } else {
    res.send({
      products: [],
    })
  }
});


// This allows us to match a request related to a certain page. 
app.get('/help/*', (req, res) => {
  res.render('404page', {
    title: '404',
    errorMessage: 'Help page not found!',
  })
});

/* After all other routes, this '*' wildcard must come last. 
Since it will search through other routes first. 
This wildcard means 'all other pages'.

If we put this first, this page will show up on pages that actually have content. 
*/
app.get('*', (req, res) => {
  res.render('404page', {
    title: '404',
    errorMessage: 'Page not found!',
  })
});


app.listen(port, () => {
  console.log('Server started on port ' + port);
});