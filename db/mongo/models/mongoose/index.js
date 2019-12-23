const mongoose = require('mongoose');
const config = require('./../../../../app_init/config').database.mongoDb
var Schema = mongoose.Schema;

console.log(config.db_name, 101010)
const M_Customer = require('./customer')(mongoose, Schema)

module.exports = mongoose.connect(`${config.db_host}${config.db_port}/${config.db_name}`, { useNewUrlParser: true,  useUnifiedTopology: true})
.then(() => {
    console.log('mongodb connected')
    return {
        Customers: M_Customer
    }
})
.catch(()=> {
    console.error('connection failed')
    return
})
