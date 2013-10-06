define(['thorax'], function (Thorax) {
  return Thorax.Model.extend({

    toggle: function() {
      this.model.set('selected', true);
    }
  });
});
