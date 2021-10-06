
exports.up = function (knex) {
    return knex.schema.createTable('enderecos', function (table) {
        table.increments();
        table.string('cep', 10).notNullable();
        table.string('logradouro', 100).notNullable();
        table.string('bairro', 100).notNullable();
        table.string('localidade', 100).notNullable();
        table.string('uf', 2).notNullable();
        table.string('numero', 10).notNullable();
        table.string('complemento', 100).notNullable();
        table.string('ibge', 50).notNullable();

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('update_at').defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('enderecos');
};