define(['model'], function (Model) {
  return Model.extend({
    name: 'filter/item',
    toggle: function() {
      this.model.set('selected', true);
    }
  });
});
