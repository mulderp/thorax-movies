define([
  'views/root',
  'backbone',
  'views/movies/index',
], function (RootView, Backbone, MoviesUI) {
  return Backbone.Router.extend({
    routes: {
      "": "index"
    },
    index: function() {
      console.log("*** start ***");
      var layout = new MoviesUI();
 
      var app = RootView.getInstance($("#movies")).setView(layout);
    }
  });
});
