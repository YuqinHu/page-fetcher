const fs = require('fs');
const request = require('request');

function fetchURL(URL, filename) {
  request(url, function (error, response, body) {
    console.log('Downloaded and saved ' + body.length + ' bytes to ' + filename);
    fs.writeFile(filename, body, function (err) {
      if (err) {
        console.log(err);
      }
    });
  });
}

fetchURL('http://www.example.edu/', './index.html');