define([
  'channel',
  'collection-view',
  'models/filter/item',
  'collections/genres',
  'templates/filter/genres',
  'templates/filter/item'
], function (channel, CollectionView, Genre, Genres, template, item) {
  return CollectionView.extend({ 
    events: {
      'click a': 'toggleFilter' 
    },
    name: 'filter/genres',
    itemTemplate: item,
    template: template,
    toggleFilter: function(ev) {
      ev.preventDefault();
      var model = $(ev.target).model();
      console.log(model.get('name'));
      channel.trigger('genres:select', model.get('name'));
    },
    initialize: function() {
      this.collection = new Genres({model: Genre});
      //this.listenTo(this.genres, "sync", this.render);
      this.collection.fetch();
    }
  });
});
