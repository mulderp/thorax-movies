define([
  'channel',
  'obscura',
  'collection-view',
  'collections/movies',
  'templates/movies/index',
  'templates/movies/thumb'
], function (channel, Obscura, CollectionView, Movies, template, item) {
  return CollectionView.extend({
    events: {
      'click .movie': 'selectMovie' 
    },
    name: 'movies/index',
    selectMovie: function(ev) {
      ev.preventDefault();
      var model = $(ev.target).model();
      console.log('select: ' + model.get('title'));
      channel.trigger('movie:selected', model.get('id'));
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
