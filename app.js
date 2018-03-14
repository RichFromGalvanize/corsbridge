var express = require('express'),
  app = express(),
  request = require('request'),
  fs = require('fs'),
  bp = require('body-parser'),
  form = fs.readFileSync(__dirname + '/form.html').toString();

app.use(bp.json());

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');
});

app.get('/', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.send(form);
});

app.get('/:url', function (req, res) {
  if (req.params.url && req.params.url.indexOf('http') >= 0) {
    request(req.params.url).pipe(res);
  } else {
    res.send('Invalid URL');
  }
});

app.post('/', function (req, res) {
  if (req.body && req.body.url) {
    request(req.body.url).pipe(res);
  } else {
    res.send('Invalid Request, brah');
  }
});

app.all('*', function (req, res) {
  res.send('Invalid Request, brah');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening!')
});