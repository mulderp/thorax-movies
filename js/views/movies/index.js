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
    selectGenre: function(genre) {
      var filters = _.keys(this.collection._filtered._filters)
      if (_.contains(filters, genre)) { 
        this.collection.removeFilter(genre);
      }
      else
      {
        this.collection.filterBy(genre, function(m) { 
          return (_.findWhere(m.get('genres'), genre))});
      }
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

      this.listenTo(channel, 'genres:select', this.selectGenre);
    }
  });
});
