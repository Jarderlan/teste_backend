
exports.up = function (knex) {
    return knex.schema.createTable('usuario_empresas', function (table) {
        table.increments();

        table.integer('user_id').unsigned().notNullable();
        table.integer('empresa_id').unsigned().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.unique(['user_id', 'empresa_id']);
        table.foreign('user_id').references('id').inTable('usuarios');
        table.foreign('empresa_id').references('id').inTable('empresas');

    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('usuario_empresas');
};
