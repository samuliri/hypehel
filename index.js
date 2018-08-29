var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var app = express();
var compression = require('compression');
app.use(sslRedirect());
app.use(compression());
app.use(express.static('www'));
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
