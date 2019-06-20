require('settings.json').config();

module.exports = {
	development: {
		client: 'pg',
		connection: {
			database: 'lingsuista',
		},
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
