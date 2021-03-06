console.log("The file is loaded!");

const weatherForm = document.querySelector('form');
const searchTerm = document.querySelector('input');
const messageOne = document.querySelector('#messageOne');
const messageTwo = document.querySelector('#messageTwo');
const messageThree = document.querySelector('#messageThree');



weatherForm.addEventListener('submit', (e) => {
  // By using e.preventDefault() this prevents the browser from refreshing and gving us an error.
  e.preventDefault();
  const location = searchTerm.value;

  messageOne.textContent = 'Loading...';
  messageTwo.textContent = ' '

    fetch('/weather?address=' + encodeURIComponent(location)).then((response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = 'Error: ' + data.error;
          messageTwo.textContent = ' ';
          //console.log('Unable to connect to weather service!');
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
          //console.log(data.location);
          //console.log(data.forecast);
        }
      })
    })
});

