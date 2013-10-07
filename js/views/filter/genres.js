define([
  'collection-view',
  'collections/genres',
  'views/filter/item',
  'templates/filter/genres',
], function (CollectionView, Genres, item, template) {
  return CollectionView.extend({ 
    name: 'filter/genres',
    itemView: item,
    template: template,
    initialize: function() {
      this.collection = new Genres();
      //this.listenTo(this.genres, "sync", this.render);
      this.collection.fetch();
    }
  });
});
