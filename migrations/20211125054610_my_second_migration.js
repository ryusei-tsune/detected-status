
exports.up = function(knex) {
    return knex.schema.createTable('measure_data', function (table) {
        table.increments('id');
        table.string('device');
        table.integer('tempreture_data');
        table.integer('humid_data');
        table.integer('light_data');
        table.timestamp('created_at').notNull();
        table.timestamp('update_at').notNull();

        table.foreign('device').references('id').inTable('devices');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('measure_data');
};