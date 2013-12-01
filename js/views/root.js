define([
  'layout-view',
  'hbs!templates/root',
  'views/header',
  'views/footer',
], function(LayoutView, rootTemplate, Header, Footer) {
  var RootView = LayoutView.extend({
    name: 'root',
    template: rootTemplate,
    initialize: function() {
      this.header = new Header();
      this.footer = new Footer();
    }
  });

  var instance;
  RootView.getInstance = function(target) {
    if (!instance) {
      instance = new RootView();
      instance.appendTo(target || document.body);
    }
    return instance;
  };

  return RootView;
});
