const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();

app.get('/', function (req, res) {
  res.send('Working on it.')
})



https.createServer({ //read certificates and private key in
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(3001, function () {
  console.log('Server listening on https://aaronbuitenwerf.ca/')
})