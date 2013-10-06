var restify = require('restify');
var _ = require('underscore');
var fs = require('fs');

var movies = require('./movies.js');

var server = restify.createServer({ name: 'movies' })

server
  .use(restify.fullResponse())
  .use(restify.bodyParser())


server.get('/movies/top', function (req, res, next) {
  res.send(Movies);
})

server.get('/genres/all', function (req, res, next) {
  var genres = _.chain(Movies)
                .map(function(movie) { console.log(movie); return movie.genres })
                .flatten()
                .uniq()
                .value();
  var genres_ids = _.chain(genres)
                 .inject(function(seed, item) { seed.push({ id: _.size(seed), name: item }); return seed }, [])
                 .value()
  //console.log(genres);
  res.send(genres_ids);
})

//serve static content
server.get(/\/.*/, restify.serveStatic({
    directory: './public',
    default: 'index.html'
}));
 
var port = process.env.PORT || 5000;
server.listen(port, function () {
  console.log('%s listening at %s', server.name, server.url)
})
