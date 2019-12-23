const Services = require('./index')// {CostomerServices: CostomerServices}

module.exports = class ServiceFactory {
    constructor(DAL) {
        this.DAL = DAL
        this.services = {}
    }

    create() {
        //ete DAl - mej ka sequelize && mongoose => loop-ov urish servicneri cank staci, es el Factory imaste 
        for(let service in Services) {
            this.services[service] = new Services[service](this.DAL[service])
        }
        return this.services
    }
}
