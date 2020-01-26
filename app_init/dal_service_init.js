const DalFactory             = require('./../DAL/dalFactory');
const AbstractServiceFactory = require('./../services/abstractServiceFactory');
const ControllerFactory      = require('./../controllers/controllerFactory');

module.exports = (async () => { 
    try {
        const model = await require('./../db')() // array of objects model
        const DAL = new DalFactory(model);
        const SERVICES = new AbstractServiceFactory(DAL.create()).create() 
        // ete petq e vor miajamanak A 2 db neri het apa dra hamar arandzin service pti sargvi,
        const CONTROLLERS = new ControllerFactory(SERVICES).create() 
        return {
            CONTROLLERS,
            SERVICES,
            DAL
        }
        
    } catch (error) {
        // ste kara kodi normal A jamanak(erb orinak db miacac a ) eli error trni u xarnvi db errori het vor@
        // ekel er sequelize/index.js  faylic, dra hamar kareli e mi hat error factory f(x) sargel vore @ndunum a error
        // object ev veradarcnum hamapatasxan errori tesk@, dra hamara karas ogtvr]es nayev nayes Rudiki helpers 
        // folderi enums.js ic
        console.log(error.message, 3333333331)
        throw new Error('eli connection error "from -> dal_service_init"')
    }
})