require('express-namespace'); // must come before express()

var path = require('path');
var express = require('express');
var server = express();
var port = process.env.PORT || 8000;
var liveReloadPort = process.env.LRPORT || 35729;
var _ = require('underscore');

module.exports = server;

var serverBase = path.resolve(__dirname, '../');
server.set('serverBase', serverBase);

// very loud! To enable: ENABLE_LOGGING=true grunt
if (process.env.ENABLE_LOGGING) {
  server.use(express.logger('dev'));
}
if (!module.parent) {
  require('connect-livereload')({port: liveReloadPort});
}
server.use(express.bodyParser());
server.use(express.methodOverride());
require('./static')(server); // Must be required before all other routes

/**
 * While developing your server, a convenient way to prevent having to restart
 * the server is to use nodemon, `npm install nodemon -g`. The following line
 * allows this file to act as a standalone server for such purposes, while also
 * acting as middleware for the grunt-connect task
 */

var chapters = [{title: "the artist", genre: "action", "id": 1},
                {title: "la dolce vita", genre: "drama", "id": 2},
                {title: "django", genre: "action", "id": 3},
                {title: "last", genres: "", "id": 4}]; 

server.get("/api/chapters", function(req, res) {
  console.log(" **** ");
  res.send(200, _.map(chapters, function(c) { 
     return c;
     // return _.extend(c, {slug: "aa"} )
  }));
})

if (!module.parent) {
  server.listen(port, function () {
    console.log("Express server listening on port " + port);
  });
}
