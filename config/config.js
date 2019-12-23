require('dotenv').config

module.exports = {

        development: {
            config_id: "development",
            app_name: "my app",
            app_desc: "my app description",
            node_port: process.env.PORT_DEV,
            
            database: {
                db_orm: process.env.DB_ORENTATION,
                mongoDb: {
                    db_host: process.env. MONGO_DB_HOST,
                    db_port: process.env.MONGO_DB_PORT,
                    db_name: process.env.MONGO_DB_NAME,
                    db_pass: process.env.MONGO_DB_PASS,
                },
                mysql: {
                    db_host: process.env.MYSQL_DB_HOST,
                    db_port: process.env.MYSQL_DB_PORT,
                    db_name: process.env.MYSQL_DB_NAME,
                    db_pass: process.env.MYSQL_DB_PASS,
                    db_user: process.env.MYSQL_DB_USER_NAME,
                }
            }
        },

        testing: {
            config_id: "testing",
            database: {
                mongoDb: process.env.MONGO_DB_TESTING,
                mysql: process.env.MYSQL_DB_TESTING
            }
        },

        staging: {
            config_id: "staging",
            node_port: process.env.PORT_STAGE,
            database: {
                mongoDb: process.env.MONGO_DB_STAGE,
                mysql: process.env.MYSQL_DB_STAGE
            }
        },

        production: {
            config_id: "production",
            node_port: process.env.PORT_PROD,
            database: {
                mongoDb: process.env.MONGO_DB_PROD,
                mysql: process.env.MYSQL_DB_PROD
            }
        }
}