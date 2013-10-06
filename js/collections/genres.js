define(['collection', 'models/filter/item'], function (Collection, Genre) {
  return Collection.extend({
    url: '/genres/all',
    model: Genre,
    name: 'genres'
  });
});
