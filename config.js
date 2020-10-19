module.exports = {
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || 'root',
        database: process.env.MYSQL_DB || 'test',
        port: process.env.MYSQL_PORT || 3306
    }
}