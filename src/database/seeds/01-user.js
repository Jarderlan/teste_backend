const { hashPassword } = require("../../helpers/functions");

// knex seed:make seedName
// knex seed:run
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          nome: 'UserTeste',
          email: 'teste@teste.com',
          password: hashPassword('teste123')
        }
      ]);
    });
};
