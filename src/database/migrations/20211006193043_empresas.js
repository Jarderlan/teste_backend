
exports.up = function(knex) {
    return knex.schema.createTable('empresas', function (table) {
        table.increments();
        table.string('nome', 500).notNullable();
        table.string('cpnj').notNullable();
        table.string('descricao').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('update_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('empresas');
};
