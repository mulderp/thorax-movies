var restify = require('restify');
var app = restify.createServer({name: 'api'});

var data = [ 
      {id: 1, title: 'Indiana Jones', length: 120, description: 'description 1', director: 'Spielberg', year: 1998, rating: 4, genres: ['Drama', 'Comedy']},
      {id: 2, title: 'Taxi Driver', length: 130,   description: 'description 2', director: 'Coppola',   year: 1954, rating: 5, genres: ['Drama', 'Action']},
      {id: 3, title: 'La Dolce Vita', length: 140, description: 'description 3', director: 'Fellini',   year: 1954, rating: 2, genres: ['Drama']}
    ];

app
  .use(restify.fullResponse())
  .use(restify.bodyParser())

app.get('/movies', function(req, res) { 
  res.send(data);
});

// app.put('/movies/:id', function(...) {
//  movie = movies.find(params[id]);
//  movie.save({...})

app.get('/genres/all', function(req, res) { 
  res.send([{name: 'Drama'}, {name: 'Comedy'}, {name: 'Action'}]);
});

app.listen(5000);
