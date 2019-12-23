module.exports = class Answer {
    constructor(model) {
        this.model = model
    }

    async createAnswers(data) {
        let answer = await this.model.create(data)
        return answer
    }
    async getAllAnswers() {
        let answers = await this.model.findAll()
        return answers;
    }
    async deleteAnswers(id) {
        let answer = await this.model.destroy({ where: { id: id } })
        return answer;
    }
}