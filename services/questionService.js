class Questions {
    constructor(questionDal) {
        this.questionDal = questionDal
    }
    async createQuestion(data) {
        let question = await this.questionDal.createData(data)
        if (question) {
            return question
        } else {
            errorLog('question not creted')
        } 
    }
    async getAllQuestions() {
        let question = await this.questionDal.getAllQuestions()
        if (question) {
            return question
        } else {
            // errorLog('question not foud')// es error@ catch e linum routneri mej
            throw new Error('PORTAL NOT EXIST')
        } 
    }
    async deleteById(id) {
        let deletedQuestion = await this.questionDal.deleteQuestion(id)
        if(deletedQuestion) {
            return deletedQuestion
        } else {
            errorLog('question not found for deleting')
        }
    }
}

module.exports = Questions