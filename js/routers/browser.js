define([
  'views/root',
  'backbone',
  'collections/movies',
  'views/browser',
  'views/details'
], function (RootView, Backbone, Movies, Browser, Details) {
  return Backbone.Router.extend({
    routes: {
        'movies/:id': 'show',
        '': 'index'
      },
      show: function(id) {
        console.log("****** show: " + id);
        var that = this;
        this.movies.on("reset", function() {
        console.log(this.movies);
          var movie = that.movies.get(id);
          console.log(movie);
          var detailsUI = new Details({model: movie});
          RootView.getInstance().setView(detailsUI);
        });
        this.movies.fetch();
        
       // .done(function(movies) {
       //   console.log(movies);
       // })
          
      },
      index: function() {
        console.log('main');
  
        var moviesUI = new Browser({movies: Movies.getProxy()});
  
        RootView.getInstance().setView(moviesUI);
      },

      initialize: function(options) {
        this.movies = options.movies;
      }

  
  });
});
