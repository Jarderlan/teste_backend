
exports.up = function(knex) {
    return knex.schema.createTable('empresas', function (table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('cnpj', 18).notNullable();
        table.string('descricao').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('update_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('empresas');
};
