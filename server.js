var connect = require('connect');

var data = [ 
      {id: 1, title: 'Indiana Jones', length: 120, description: 'description 1', director: 'Spielberg', year: 1998, rating: 4, genres: ['Drama', 'Comedy']},
      {id: 2, title: 'Taxi Driver', length: 130,   description: 'description 2', director: 'Coppola',   year: 1954, rating: 5, genres: ['Drama', 'Action']},
      {id: 3, title: 'La Dolce Vita', length: 140, description: 'description 3', director: 'Fellini',   year: 1954, rating: 2, genres: ['Drama']}
    ];


var app = connect()
  .use(connect.logger())
  .use(connect.static('dist'));

var port = process.env.PORT || 5000;

app.get('/movies', function(req, res) { 
  res.send(data);
});

app.listen(port, function() {
  console.log("Connect server listenting on port " + port);
});
