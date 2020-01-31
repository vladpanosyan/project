module.exports = class Answer {
    constructor(model, models) {
        this.model = model;
        this.models = models;
    }

    async createaAnswer(data) {
        let answer = await this.model.create(data);
        return answer
    }

    async getCurrentAnswer(id) {
        return this.model.findByPk(id, {
            required: true,
            include: [{
                model: this.models.Users,
                as: 'answerToUser',
                attributes: []
            }, {
                attributes: ['id', 'question'],
                model: this.models.Questions,
                as: 'answerToQuestion',
                include: [{
                    model: this.models.Nicknames,
                    as: 'nickss'
                }]
            }]
        })
    }
    async getAllAnswers(portalId) {
        let answers = await this.model.findAll({
           
            required: true,
            include: [{
                model: this.models.Users,
                as: 'answerToUser',
                attributes: []
            }, {
                where: {
                    portalId
                },
                attributes: ['id', 'question'],
                model: this.models.Questions,
                as: 'answerToQuestion',
                include: [{
                    model: this.models.Nicknames,
                    as: 'nickss'
                }]
            }]
        })
        console.log(JSON.stringify(answers, null, 2), 9999999999)
        return answers;
    }
    async deleteAnswers(id) {
        let answer = await this.model.destroy({ where: { id: id } })
        return answer;
    }
}