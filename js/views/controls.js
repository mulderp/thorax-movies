define([
  'view',
  'collections/movies',
  'hbs!templates/controls'
], function (View, Movies, template) {
  return View.extend({
    name: 'controls',
    template: template,

    sortByTitle: function(ev) {
      ev.preventDefault();
      var proxy = Movies.getProxy();
      proxy.setSort('title', 'desc');
    },

    sortByRating: function(ev) {
      ev.preventDefault();
      var proxy = Movies.getProxy();
      proxy.setSort('rating', 'desc');
    },

    sortByDirector: function(ev) {
      ev.preventDefault();
      var proxy = Movies.getProxy();
      proxy.setSort('director', 'desc');
    },

    sortByYear: function(ev) {
      ev.preventDefault();
      var proxy = Movies.getProxy();
      proxy.setSort('year', 'desc');
    }
  });
});
