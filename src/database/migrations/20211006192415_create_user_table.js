// knex migrate:make nomeMigration
// knex migrate:up or latest (ultima criada)
// knex migrate:rollback

exports.up = function (knex) {
    return knex.schema.createTable('usuarios', function (table) {
        table.increments();
        table.string('nome', 500).notNullable();
        table.string('telefone', 15).notNullable();
        table.integer('endereco_id').unsigned().notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('update_at').defaultTo(knex.fn.now());

        table.foreign('endereco_id').references('id').inTable('enderecos');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('usuarios');
};
