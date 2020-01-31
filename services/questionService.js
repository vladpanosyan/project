class Questions {
    constructor(questionDal) {
        this.questionDal = questionDal
    }
    async createQuestion(data) {
        let question = await this.questionDal.createQuestion(data)
        if (question) {
            return question
        } else {
            errorLog('question not creted')
        } 
        // console.log("question created", 555555, data)
    }
    async getAllQuestions(portalToken) {
        let questions = await this.questionDal.getAllQuestions(portalToken);
        // console.log(JSON.stringify(questionLikers, null, 2))
        // console.log(JSON.stringify(questions, null, 2));
        if (questions) {
            return questions
        } else {
            // errorLog('questions not foud')// es error@ catch e linum routneri mej
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

    async getTop10(portalId) {
        const getTop10 = await this.questionDal.getTop10(portalId);
        return getTop10;
    }
}

module.exports = Questions