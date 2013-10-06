define([
  'obscura',
  'collection-view',
  'collections/movies',
  'templates/movies/index',
  'templates/movies/thumb'
], function (Obscura, CollectionView, Movies, template, item) {
  return CollectionView.extend({
    events: {
      'click .movie': 'selectMovie' 
    },
    name: 'movies/index',
    selectMovie: function(ev) {
      ev.preventDefault();
      var model = $(ev.target).model();
      console.log(model.get('name'));
      console.log(model);
      model.toggle('selected');
    },
    template: template,
    itemTemplate: item,
    initialize: function() {
      var movies = new Movies();
      this.collection = new Obscura(movies);
      this.collection
            .setPerPage(4)
            .setSort('showtime', 'desc');
      movies.fetch();
    }
  });
});
