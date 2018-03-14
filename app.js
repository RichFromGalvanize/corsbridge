var express = require('express'),
    app = express(),
    request = require('request');
    fs = require('fs'),
    bp = require('body-parser'),
    form = fs.readFileSync(__dirname + '/form.html').toString();

app.use(bp.json());

app.get('/', function(req, res) {
  res.set('Content-Type', 'text/html');
  res.send(form);
});

app.get('/:url', function (req, res) {
  if(req.params.url && req.params.url.indexOf('http') >= 0) {
    request(req.params.url).pipe(res);
  } else {
    res.send('Invalid URL');
  }
});

app.post('/', function (req, res) {
  if(req.body && req.body.url) {
    request(req.body.url).pipe(res);
  } else {
    res.send('Invalid Request, brah');
  }
});

app.all('*', function (req, res) {
  res.send('Invalid Request, brah');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Example app listening!')
});