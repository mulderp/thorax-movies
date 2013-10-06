define([
  'views/root',
  'backbone',
  'collections/movies',
  'views/movies/index',
], function (RootView, Backbone, Movies, MoviesUI) {
  return Backbone.Router.extend({
    routes: {
      "": "index"
    },
    index: function() {
      console.log("*** start ***");
      var movies = new Movies();
      var layout = new MoviesUI({collection: movies});
 
      var app = RootView.getInstance($("#movies")).setView(layout);
    }
  });
});
