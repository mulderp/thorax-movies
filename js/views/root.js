define([
  'layout-view',
  'templates/root',
  'views/filter/layout'
], function(LayoutView, rootTemplate, FilterUI) {
  var RootView = LayoutView.extend({
    name: 'root',
    template: rootTemplate,
    initialize: function() {
    //  this.header = new HeaderLayout;
    //  this.footer = new FooterLayout;
      this.filter = new FilterUI();
    }
  });
  
  var instance;
  RootView.getInstance = function(target) {
    if (!instance) {
      instance = new RootView;
      instance.appendTo(target || document.body);

      instance.filter.appendTo($('#filter'));
    }
    return instance;
  };

  return RootView;
});
