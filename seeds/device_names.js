
exports.seed = function (knex) {
  return knex('devices').insert([
    { id: '7C:9E:BD:61:3E:C8' },
  ]);
};
