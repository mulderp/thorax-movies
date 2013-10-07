define([
  'view',
  'templates/filter/item'
], function (View, template) {
  return View.extend({
    events: {
      'click a': 'toggleFilter' 
    },

    name: 'filter/item',

    template: template,

    toggleFilter: function(ev) {
      ev.preventDefault();
      var model = $(ev.target).model();
      model.toggle();
    },

    initialize: function() {
      this.listenTo(this.model, "change", this.render);
    }
  });
});
