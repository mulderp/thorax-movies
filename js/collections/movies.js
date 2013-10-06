define(['collection'], function (Collection) {
  return Collection.extend({
    url: '/movies/top',
    name: 'movies'
  });
});
