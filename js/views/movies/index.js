define([
  'collection-view',
  'collections/movies',
  'templates/movies/index',
  'templates/movies/thumb'
], function (CollectionView, Movies, template, item) {
  return CollectionView.extend({
    name: 'movies/index',
    template: template,
    itemTemplate: item,
    initialize: function() {
      this.collection = new Movies;
    }
  });
});
