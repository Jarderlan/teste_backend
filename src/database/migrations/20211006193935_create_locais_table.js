
exports.up = function (knex) {
    return knex.schema.createTable('locais', function (table) {
        table.increments();
        table.string('nome', 500).notNullable();
        table.integer('endereco_id').unsigned().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('update_at').defaultTo(knex.fn.now());

        table.foreign('endereco_id').references('id').inTable('enderecos');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('locais');
};
