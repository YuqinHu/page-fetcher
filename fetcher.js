const request = require('request');
const fs = require('fs');
const readline = require('readline');
if (process.argv.slice(2).length > 2) {
  console.log('Invalid number of parameters entered.');
  process.exit();
}

const URI = process.argv.slice(2, 3).toString();
const FILEPATH = process.argv.slice(3, 4).toString();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



request(URI, (error, response, body) => {
  const checkIfExists = function(err) {
  Download();
  rl.close();
  };
  if (!error) {
    console.log('Downloading...');
    fs.writeFile(`./${FILEPATH}`, `${body}`, checkIfExists);
  }
});

const Download = function() {
  let STATS = fs.statSync(FILEPATH);
  console.log(`Downloaded and saved ${STATS.size} bytes to ./${FILEPATH}. `);
};
