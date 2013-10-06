define([
  'view',
  'templates/filter/layout',
  'views/filter/ratings',
  'views/filter/genres' 
], function (View, template, RatingsUI, GenresUI) {
  return View.extend({
    name: 'filter/layout',
    template: template,
    initialize: function() {
      //this.ratings = new RatingsUI; 
      this.genres = new GenresUI();
    }
  });
});
