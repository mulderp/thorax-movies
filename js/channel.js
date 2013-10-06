define(['underscore', 'backbone'], function (_, Backbone) {

  var channel;
  if ( !channel ) {
    channel = _.extend({}, Backbone.Events);
  }
  return channel;
});
