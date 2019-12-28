const Controllers = require('./index')// 

module.exports = class ControllerFctory {
    constructor(SERVICE) {
        this.SERVICE = SERVICE
        this.controllers = {}
    }

    create() {
        //ete DAl - mej ka sequelize && mongoose => loop-ov urish servicneri cank staci, es el Factory imaste 
        // console.log(this.SERVICE, 666666666666)
        // console.log(Controllers, 777777777777)
        for(let controller in Controllers) {
            
            this.controllers[controller] = new Controllers[controller](this.SERVICE[controller])
        }
        return this.controllers
    }
}