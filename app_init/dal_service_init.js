const DalFactory = require('./../DAL/dalFactory');
const AbstractServiceFactory = require('./../services/abstractServiceFactory')

module.exports = (async () => {
    try {
        const models = await require('./../db')() // array of objects model
        const DAL = new DalFactory(models)
        const SERVICES = new AbstractServiceFactory(DAL.create()).create() 
        // ete petq e vor miajamanak A 2 db neri het apa dra hamar arandzin service pti sargvi,
        return SERVICES
        
    } catch (error) {
        // ste kara kodi normal A jamanak(erb orinak db miacac a ) eli error trni u xarnvi db errori het vor@
        // ekel er sequelize/index.js  faylic, dra hamar kareli e mi hat error factory f(x) sargel vore @ndunum a error
        // object ev veradarcnum hamapatasxan errori tesk@, dra hamara karas ogtvr]es nayev nayes Rudiki helpers 
        // folderi enums.js ic
        console.log(error.message, 3333333331)
    }
})