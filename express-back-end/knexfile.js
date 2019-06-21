const connection = require('./settings.json');

module.exports = {
  development: {
    client: 'pg',
    connection,
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
    },
  },
};