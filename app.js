var express = require('express');
var app = express();
require('./app/api-routes/routes')(app);

if(process.argv[2]){
    process.exit();
}

var server = app.listen(2626, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('MusivkAPI running on http://%s:%s', host, port);
});
