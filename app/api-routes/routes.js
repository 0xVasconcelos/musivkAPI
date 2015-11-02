var request = require("request");
module.exports = function(app){


    // respond with "hello world" when a GET request is made to the homepage
    app.get('/', function(req, res) {
        res.send("MusivkAPI 0.0.1 - https://github.com/lucaslg26/musivkAPI");
    });

    app.get('/api/v1/searchSong/:data/:accessToken', function(req, res) {
        var songNameEnc = encodeURIComponent(req.params.data);
        request({
                    url: "https://api.vk.com/method/audio.search?q=" + songNameEnc + "&v=5.37&count=100&access_token=" + req.params.accessToken,
                    json: true
                }, function (error, response, body) {
                    if (!error && response.statusCode === 200) {
                        var songList = [];
                        var responseArray = body.response.items;
                        for(var i in responseArray){
                            songList[i] = {
                                id: responseArray[i].id,
                                owner_id:  responseArray[i].owner_id,
                                artist: responseArray[i].artist,
                                title: responseArray[i].title,
                                duration: responseArray[i].duration
                            };
                        }
                        res.json(songList);
                    }
                });

    });

    app.get('/api/v1/downloadSong/:id', function(req, res) {
        res.send("MusivkAPI 0.0.1 - https://github.com/lucaslg26/musivkAPI");
    });

    app.get('/api/v1/getSongStats/:id', function(req, res) {
        res.send("MusivkAPI 0.0.1 - https://github.com/lucaslg26/musivkAPI");
    });

    app.get('/api/v1/getSongURL/:id', function(req, res) {
        res.send("MusivkAPI 0.0.1 - https://github.com/lucaslg26/musivkAPI");
    });

}
