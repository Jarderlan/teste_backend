require('dotenv').config()
module.exports = {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
    migrations: {
        directory: process.env.NODE_ENV == 'production' ? './build/database/migrations' : './src/database/migrations',
    },
    seeds: {
        directory: process.env.NODE_ENV == 'production' ? './build/database/seeds' : './src/database/seeds',
    }
};
