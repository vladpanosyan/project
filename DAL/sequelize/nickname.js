
module.exports = class Nickname {
    constructor(model, models) {
        this.model = model,
            this.models = models
    }

    async createData(data) {
        try {
            console.log(data, 6363)
            let nickname = await this.model.create({ name: data.nickName, portalId: data.portalId, image: data.image });
            nickname = nickname.get({ plain: true });
            return nickname
        } catch (error) {
            if (error.name === "SequelizeUniqueConstraintError") {
                // throw new AppError(error.errors[0].message, error)
                return {
                    ok: null,
                    textContent: error.errors[0].message
                }
            }
        }
    }

    async getAll() {

        let nicknames = await this.model.findAll({
            include: [{
                model: this.models.Portals,
                include: [{
                    model: this.models.Users,
                    where: {
                        firstName: 'bbbb'
                    }
                }]
            }]
        })
        return nicknames;
    }

    // get nick by id
    async getNickData(id) {
        return this.model.findByPk(id);
    }

    async deleteUser(id) {
        let nickname = await this.model.destroy({ where: { id: id } })
        return nickname
    }

}