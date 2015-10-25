var express = require('express');
var app = express();
require('./app/api-routes/routes')(app);


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('MusivkAPI running on http://%s:%s', host, port);
});
