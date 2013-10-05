define([
  'view',
  'templates/movies/index'
], function (View, template) {
  return View.extend({
    name: 'movies/index',
    template: template
  });
});
