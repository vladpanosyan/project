
module.exports = class Nickname {
    constructor(model, models) {
        this.model = model,
        this.models = models
    }

    async createData(data) {
        try {
            console.log(data, 6363)
            let nickname = await this.model.create({ name: data.nickName, portalId: data.portalId, image: data.image });
            // let portal = await this.models.Portals.findOne({where: {id: data.portalId}});
            // nickname.addPortals(portal, {through: {}});

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
        console.log(id, 7410)
        return this.model.findByPk(id, {
            raw: true,
            // where: {
            //     id,
            // }
        });
    }

    //
    async getNickData1(nickId, portalId) {
        return this.model.findOne({
            // raw: true,
            attributes: ["id", "name", "image", "portalId"],
            where: {
                id: nickId,
                portalId
            },
            include: [{
                as: 'nickToPortal',
                model: this.models.Portals,
            }]
            // required: true,
            // include:[{
            //     attributes: ['name', 'start'],
            //     model: this.models.Portals,
            //     where: {
            //         token: portalToken,
            //     },
            //     through: {
            //         where: {
            //             nicknameId: nickId
            //         },
            //         attributes: ['portalId']
            //     }
            // }]
        })
    }
    // get portalId using portalToken
    getPortalId(portalToken) {
        return this.models.Portals.findOne({
            raw: true,
            attributes: ['id'],
            where: {
                token: portalToken
            }
        });
    }

    async deleteUser(id) {
        let nickname = await this.model.destroy({ where: { id: id } })
        return nickname
    }

}