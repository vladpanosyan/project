const AppError = require('./../../../../HELPERS/ErrorHandling/AppError')
var fs        = require('fs');
var path      = require('path');
const { Sequelize } = require('sequelize')
const MYSQL = require('./../../../../app_init/config').database.mysql;

const sequelize = new Sequelize(MYSQL.db_name, MYSQL.db_user, MYSQL.db_pass, {
    dialect: "mysql",
    host: MYSQL.db_host,
    port: MYSQL.db_port,
    //  timezone: '+00:00',
});

const basename  = path.basename(__filename);
const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    const name = model.name
    db[name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
// console.log(1111111111111111)
module.exports = sequelize
    .authenticate()
    .then(() => {
        console.log('SEQUELIZE - Connection has been established successfully.');
        
    })
    .then(async () => {
      try {
        await sequelize.sync()
        console.log('`Database & tables created!`')
        return 'db synced'
      } catch (error) {
        console.log('tables not created , DB CONNECTION ERROR', error.message)
        throw new DbError('tables not created during syncronisation', error)
      }
    })
    .then(res => {
        // db.Customers.findAll({raw:true,where: {}})
        // .then(customer => console.log(customer))
        // console.log(db)
        global.UserModel = db.Users;
        global.sequelize = sequelize; 
        return db //exports into mysql/models/index.js
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err.message, 555555555555);
        throw new AppError('Connection error, check DB connection', err)
    })