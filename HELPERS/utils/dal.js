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
        // console.log(models, 8888)
        for (let model in models[ORM]) {
            DALS[model] = new DAL[model](models[ORM][model])
        }
    }
    return DALS
}