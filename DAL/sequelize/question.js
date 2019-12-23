module.exports = class Question {
    constructor(model) {
        this.model = model
    }

    async createQuestion(data) {
        let question = await this.model.create(data)
        return question
    }
    async getAllQuestions() {
        let questions = await this.model.findAll()
        return questions;
    }
    async deleteQuestion(id) {
        let question = await this.model.destroy({ where: { id: id } })
        return question;
    }
}