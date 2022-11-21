require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dns = require('dns');
const bodyParser = require('body-parser');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3001;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

const savedUrls = [];

app.post('/api/shorturl', (req, res, next) => {
  let inputUrl = req.body.url;
  let urlObject = new URL(inputUrl);
  let shortUrlNumber;
  dns.lookup(urlObject.hostname, (err, address, family) => {
    if(err){
      res.json({ error: 'invalid url' });
      return next();
    }
    else {
      if (!savedUrls.includes(inputUrl)) {
        savedUrls.push(inputUrl);
      }
      shortUrlNumber = savedUrls.indexOf(inputUrl);
      res.json({original_url: inputUrl, short_url: shortUrlNumber });
      return next();
    }
  });
});

app.get(`/api/shorturl/:short_url`, (req, res, next) => {
  let redirectUrl = savedUrls[req.params.short_url];
  res.redirect(redirectUrl);
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
