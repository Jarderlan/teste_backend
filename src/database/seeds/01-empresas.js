const { hashPassword } = require("../../helpers/functions");

// knex seed:make seedName
// knex seed:run
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('empresas').del()
    .then(function () {
      // Inserts seed entries
      return knex('empresas').insert([
        {
          id: 1,
          nome: 'Teste LTDA',
          cnpj: '38937974000179',
          descricao: 'Empresa Teste'
        }
      ]);
    });
};
