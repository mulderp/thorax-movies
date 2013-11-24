define([
  'views/root',
  'backbone',
  'routers/browser',
  'collections/movies'
], function (RootView, Backbone, Browser, Movies) {
  return Backbone.Router.extend({
    routes: {
        'movies/:id': 'show',
        '': 'index'
      },
      show: function(id) {
        console.log("****** show: " + id);
      },
      index: function() {
        console.log('main');
  
        var moviesUI = new Browser({movies: Movies.getProxy()});
  
        RootView.getInstance().setView(moviesUI);
      }
  
  });
});
