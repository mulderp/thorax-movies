define(['collection', 'obscura'], function (Collection, Obscura) {

  var Movies = Collection.extend({
    name: 'movies',
    url: '/movies'
  });

  var proxy, movies, deferred;
  Movies.getProxy = function() {
    if (!proxy) {
      console.log("****");
      movies = new Movies();
      movies.fetch();
      proxy = new Obscura(movies);
    }

    return proxy;
  };

  Movies.getInstance = function() {
    if (!movies) {
      console.log("****");
      movies = new Movies();
    }

    return movies;
  };

  return Movies;
});
