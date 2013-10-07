define(['model',
        'channel',
], function (Model, channel) {
  return Model.extend({
    name: 'filter/item',
    toggle: function() {
      console.log("toggle");
      channel.trigger('genres:select', this.get('name'));
      var selected = this.get('selected');
      this.set('selected', !selected);
    }
  });
});
