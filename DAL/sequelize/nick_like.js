
module.exports = class Nick_like {
    constructor(model, models) {
        this.model = model,
        this.models = models
    }

    async addLike(data) {
        this.model.create(data)
    }

    deleteLike(data) {
        this.model.destroy({
            where: data
        });
    }
}