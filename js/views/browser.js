define([
  'view',
  'views/movie',
  'views/genres',
  'views/controls',
  'hbs!templates/browser',
  'templates/helpers/stars'
], function (View, Movie, Genres, Controls, template, stars) {
  return View.extend({
    name: 'browser',
    template: template,
    sortByTitle: function(ev) {
      ev.preventDefault();
      console.log(ev);
      console.log(sort);

    },
    initialize: function() {
      this.genres = new Genres;
      this.controls = new Controls;
    }
  });
});
