var app = require('./config/server.js');

// listen
app.listen(app.get('port'));
