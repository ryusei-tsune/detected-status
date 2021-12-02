
/** @param {import("knex").Knex} knex */
exports.up = function(knex) {
    return knex.schema.createTable('measure_data', function (table) {
        table.increments('id').primary();
        table.string('device_id', 32).notNullable();
        table.decimal('temperature', 10, 3).nullable();
        table.decimal('humidity', 10, 3).nullable();
        table.decimal('brightness_level', 10, 3).nullable().comment("明→5000,暗→0");
        table.datetime('created_at').notNullable().defaultTo(knex.fn.now());
        table.datetime('update_at').notNullable().defaultTo(knex.fn.now());

        table.foreign('device_id').references('id').inTable('devices').onUpdate('CASCADE').onDelete('RESTRICT');
    })
};

/** @param {import("knex").Knex} knex */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('measure_data');
};