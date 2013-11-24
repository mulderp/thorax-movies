define([
  'view',
  'hbs!templates/footer'
], function (View, template) {
  return View.extend({
    name: 'footer',
    template: template
  });
});
