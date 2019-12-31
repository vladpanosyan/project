const Controllers = require('./index')// 

module.exports = class ControllerFctory {
    constructor(SERVICE) {
        this.SERVICE = SERVICE
        this.controllers = {}
    }

    create() {
        //ete DAl - mej ka sequelize && mongoose => loop-ov urish servicneri cank staci, es el Factory imaste 
        for(let controller in Controllers) {
            
            this.controllers[controller] = new Controllers[controller](this.SERVICE[controller])
        }
        return this.controllers
    }
}