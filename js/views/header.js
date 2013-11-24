define([
  'view',
  'hbs!templates/header'
], function (View, template) {
  return View.extend({
    name: 'header',
    template: template
  });
});
