define([
  'backbone',
  'collection-view',
  'templates/filter/ratings',
  'templates/filter/item'
], function (Backbone, CollectionView, template, item) {
  return CollectionView.extend({
    name: 'filter/ratings',
    itemTemplate: item,
    template: template,
    initialize: function() {
      this.collection = new Backbone.Collection([{name: 1},{name: 2},{name: 3},{name: 4},{name: 5}]);
    }
  });
});
