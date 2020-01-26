const ServiceFactory = require('./serviceFactory')

module.exports = class AbstractServiceFactory {
    constructor(DAL) {
        this.DAL = DAL
    }

    create() {
        if(this.DAL.hasOwnProperty('sequelize') && this.DAL.hasOwnProperty('mongoose')) {

        } else {
            // console.log(this.DAL, 5555)
            return new ServiceFactory(this.DAL).create()
        }
    }
}