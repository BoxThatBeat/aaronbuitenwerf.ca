const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();

app.set("view engine", "pug");
app.use(express.static("public"));

app.get('/', function(req, res, next) {
	res.status("200").render("index");
	return;
});



https.createServer({ //read certificates and private key to be used for https
  key: fs.readFileSync('key.key'),
  cert: fs.readFileSync('cert.cert')
}, app).listen(3000, function () {
  console.log('Server listening on https://localhost:3000/')
})