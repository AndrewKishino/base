require('dotenv').load();

var app = require('express')();
var http = require('http').Server(app);

app.set('port', (process.env.PORT || 5000));  

// configure our server with all the middleware
require('./config/middleware.js')(app, require('express'));

http.listen(app.get('port'), function(){
  console.log('listening on *:5000');
});
