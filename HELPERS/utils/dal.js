module.exports = (models, DAL, ORM) => {
    const DALS = {}

    if (Array.isArray(DAL)) {  // es nuyne  pordzi anes Array.reduce() - ov
        for (let i = 0, length = DAL.length; i < length; i++) { 
            let currORM = {}
            for (let model in models[ORM[i]]) {
                currORM[model] = new DAL[i][model](models[ORM[i]][model])
            }
            DALS[ORM[i]] = currORM
        }
    } else {
        for (let model in models[ORM]) {
            // console.log(models[ORM][model], 8888)
            DALS[model] = new DAL[model](models[ORM][model], models[ORM])// ste avelacra 2 dependency all models
        }
    }
    return DALS
}
//exports into dalFactory.js