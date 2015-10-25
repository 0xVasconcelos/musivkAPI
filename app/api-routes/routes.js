
module.exports = function(app){

   // respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send("MusivkAPI 0.0.1 - https://github.com/lucaslg26/musivkAPI");
});
}
