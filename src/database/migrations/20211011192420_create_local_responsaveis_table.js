exports.up = function (knex) {
    return knex.schema.createTable('local_responsaveis', function (table) {
        table.increments();
        table.integer('user_id').unsigned().notNullable();
        table.integer('local_id').unsigned().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.boolean('principal').defaultTo(false);

        table.unique(['user_id', 'local_id']);
        table.foreign('user_id').references('id').inTable('usuarios');
        table.foreign('local_id').references('id').inTable('locais');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('local_responsaveis');
};