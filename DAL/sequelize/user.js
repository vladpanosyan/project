const AppError = require('./../../HELPERS/ErrorHandling/AppError')

module.exports = class User { 
    constructor(model, models) {
        this.model = model;
        this.models = models;
    }

    async createData(data) {
        try {
            data.password = await this.models.Users.generateHash(data.password)
            // data = {...data, password}
            let user = await this.model.create(data)
            user = user.get({plain: true})
            delete user['password'];
            delete user['email'];
            console.log(user, 727272727272)
            return user;
        } catch (error) {
            if(error.name === "SequelizeUniqueConstraintError") {
                throw new AppError(error.errors[0].message, error)
            } else {
                throw new AppError(error.message, error)
            }
        }
    }
    async getAll() {
        let users = await this.model.findAll()
        return users;
    }
    async getByUserId(id) {
        let user = this.model.findByPk(id, {
            attributes: ['id', 'firstName', 'LastName', 'img', 'time']
        })
        return user;
    }

    async deleteUser(id) {
        let user = await this.model.destroy({where: {id: id}})
        return user
    }
    async updatedUser(id, data, fields = []) {
        let updatedUser = await this.model.update(
            data,
             {
                fields:fields.length ? field : null,
                where: {id}
            })
            return !!updatedUser[0]
        }
}