module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'appointment',
        user: process.env.DB_USER || 'appointment',
        password: process.env.DB_PASS || 'appointment',
        options: {
            dialect: process.env.DB_DIALECT || 'sqlite',
            host: process.env.DB_HOST || 'localhost',
            storage: './appointment.sqlite'
        }
	},
	authentication: {
		jwtSecret: process.env.JWT_SECRET || 'secret'
	}
}