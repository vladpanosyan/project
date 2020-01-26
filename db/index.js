const {db_orm} = require('./../app_init/config').database;

async function* fooo (){
    try {
        let dbmodel = db_orm.split('&&');

        for(let ORM of dbmodel) {
            let model = await require(`./${ORM === 'sequelize' ? 'mysql' : 'mongo'}/models/${ORM}`)
            yield {[ORM]: model};
        }
        
    } catch (error) {
        console.log(error.name, 77777)
        if(error.name === 'SequelizeConnectionRefusedError') {
        } // stexic kangnecnum enq loop ev vercnum enq error@ karanq log anenq ,
        
    }
}

module.exports = async() => {
    try {
        let model = {};
        for await(let ORMmodel of fooo()) {
            model = {...model, ...ORMmodel};
        }
        return model;    
    } catch (error) {
        console.log(error.message, 9999999989)   // es errorner@ qcuma anmijapes modelneri mejic  + naev erb xaamp anjatvac a   

        throw new Error('WTF + connection Error  " from -> db/index"')
    }
}
