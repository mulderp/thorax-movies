define([
  'view',
  'hbs!templates/details'
], function (View, template) {
  return View.extend({
    name: 'details',
    template: template
  });
});
