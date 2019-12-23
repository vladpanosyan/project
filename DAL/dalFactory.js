const dalCreator = require('./../HELPERS/utils/dal')

const sequelizeDal = require('./sequelize')// object of DAL classes(CustomerDal, OrederDal)
const mongooseDal  = require('./mongoose')
// const mongooseDAl = require('./mongoose')

// dal patasxnatu e db-neri het A hamar, service-i mievnuyn interface-n kara tarber
// DAL-er irakanacni, kaxvac inch vor paymanic(orinak db popoxutyun mekic myusin), Servicein 
// chi hetaqrqrum te DAL inch e anum, Ayn menak DAL ic spacum e patasxani vor ta controllerin

// ir hertin DAL - interfacener@ (createData, getAll, deletCustomer, etc) ankax naranic te ogtagorcum es mongo 
// te SQL, metq e unenan nuyn interfacen(chi kara mongo - i depqum lini createData(), is SQL->createMATA())
class DalFactory {
    constructor(models) {
        this.models = models// {Customers: Customers, Orders: Orders}
    }
    create() {
        if (this.models.hasOwnProperty('mongoose') && this.models.hasOwnProperty('sequelize')) {
            return dalCreator(this.models,[sequelizeDal, mongooseDal], ['sequelize', "mongoose"] )
        } else if (this.models.hasOwnProperty('sequelize')) {
            let t = dalCreator(this.models, sequelizeDal, 'sequelize')
            return t

        } else {
            return dalCreator(this.models, mongooseDal, 'mongoose')
            /*else erb ogtagorcvume mongoose && sequelize return enq anqum {
             sequelize: {
                 Customers: new Customer(CustomerSEQModel),
                 Order: new Order(OrderSEQMoel)
             },
             mongoose: {
                Customers: new Customer(CustomerMONGOOSEmodel)
                ... .... .... 
             }
            }*/
        }
    }
}
module.exports = DalFactory        
