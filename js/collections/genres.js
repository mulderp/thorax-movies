define(['collection'], function (Collection) {
  return Collection.extend({
    name: 'genres',
    url: '/genres/all'
  });
});
