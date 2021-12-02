
/** @param {import("knex").Knex} knex */
exports.up = function (knex) {
    return knex.schema.createTable('devices', function (table) {
        table.string('id', 32).primary();
        table.string('name', 127).notNullable().defaultTo("名称未設定");
        table.datetime('created_at').notNullable().defaultTo(knex.fn.now());
        table.datetime('update_at').notNullable().defaultTo(knex.fn.now());
    })
};

/** @param {import("knex").Knex} knex */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('devices');
};
