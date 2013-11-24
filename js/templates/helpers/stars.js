define(['handlebars', 'underscore'], function (Handlebars, _) {
  function stars(count) {
    var rating = _(count).times(function(n) {
        return "*"
    });

    var html = new Handlebars.SafeString(rating.join(" "));
    return html;
  }
  Handlebars.registerHelper('stars', stars);
  return stars;
});
