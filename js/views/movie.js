define([
  'view',
  'hbs!templates/movie',
  'templates/helpers/stars',
], function (View, template, stars) {
  return View.extend({
    name: 'movie',
    template: template,
    tagName: 'article',
    className: 'movie'
  });
});
