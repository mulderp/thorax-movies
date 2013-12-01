define([
  'view',
  'collections/genres',
  'hbs!templates/genres'
], function (View, Genres, template) {
  return View.extend({
    name: 'genres',
    template: template,
    initialize: function() {
      this.genres = new Genres;
      this.genres.fetch();
    }
  });
});
