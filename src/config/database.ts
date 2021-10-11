import Knex from "knex";
import { Model } from "objection";
import { types } from "pg"

types.setTypeParser(1700, function (val) {
    return parseFloat(val);
});

const knexconfig = require("../../knexfile");

export const knex = Knex(knexconfig);

const database = () => {
    Model.knex(knex)
}


export default database;