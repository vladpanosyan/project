const {db_orm} = require('./../app_init/config').database;

async function* foo (){
    let dbmodel = db_orm.split('&&');
    for(let ORM of dbmodel) {
        let model = await require(`./${ORM === ('sequelize' || 'objection' || 'mysql') ? 'mysql' : 'mongo'}/models/${ORM}`)
        yield {[ORM]: model};
    }
}

module.exports = async() => {
    try {
        let model = {};
        for await(let ORMmodel of foo()) {
            model = {...model, ... ORMmodel};
        }
        return model;    
    } catch (error) {
        console.log(error.message, 44444444444)        
    }
}
