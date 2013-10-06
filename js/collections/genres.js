define(['collection'], function (Collection) {
  return Collection.extend({
    url: '/genres/all',
    name: 'genres'
  });
});
