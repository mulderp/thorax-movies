define(['model'], function (Model) {
  return Model.extend({
    name: 'filter/item',
    toggle: function() {
      console.log("toggle");
      this.set('selected', true);
    }
  });
});
