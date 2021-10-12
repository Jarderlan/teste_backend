exports.up = function (knex) {
    return knex.schema.createTable('empresa_locais', function (table) {
        table.increments();
        table.integer('empresa_id').unsigned().notNullable();
        table.integer('local_id').unsigned().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.boolean('principal').defaultTo(false);

        table.unique(['empresa_id', 'local_id']);
        table.foreign('empresa_id').references('id').inTable('empresas');
        table.foreign('local_id').references('id').inTable('locais');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('empresa_locais');
};