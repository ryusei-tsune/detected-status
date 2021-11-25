
exports.up = function(knex) {
    return knex.schema.createTable('devices', function (table) {
        table.increments('id');
        table.string('name');
        table.timestamp('created_at').notNull();
        table.timestamp('update_at').notNull();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('area');
};
