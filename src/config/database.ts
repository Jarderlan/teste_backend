import Knex from "knex";
import { Model } from "objection";
import { types } from "pg"

types.setTypeParser(1700, function (val) {
    return parseFloat(val);
});

const knexconfig = require("../../knexfile");
const database = () => {
    const knex = Knex(knexconfig);
    Model.knex(knex)
}

export default database;