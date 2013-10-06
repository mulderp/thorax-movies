define([
  'collection-view',
  'collections/genres',
  'templates/filter/genres',
  'templates/filter/item'
], function (CollectionView, Genres, template, item) {
  return CollectionView.extend({
    name: 'filter/genres',
    itemTemplate: item,
    template: template,
    initialize: function() {
      this.collection = new Genres();
      //this.listenTo(this.genres, "sync", this.render);
      this.collection.fetch();
    }
  });
});
