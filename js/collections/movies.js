define(['collection', 'models/movie'], function (Collection, Movie) {
  return Collection.extend({
    url: '/movies/top',
    model: Movie,
    name: 'movies'
  });
});
