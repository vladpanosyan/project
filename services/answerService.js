class Answers {
    constructor(answerDal) {
        this.answerDal = answerDal
    }
    async createAnswer(data) {
        let answer = await this.answerDal.createData(data)
        if (answer) {
            return answer
        } else {
            errorLog('answer not creted')
        } 
    }
    async getAllAnswers() {
        let answer = await this.answerDal.getAllAnswers()
        if (answer) {
            return answer
        } else {
            // errorLog('answer not foud')// es error@ catch e linum routneri mej
            throw new Error('PORTAL NOT EXIST')
        } 
    }
    async deleteById(id) {
        let deletedAnswer = await this.answerDal.deleteAnswer(id)
        if(deletedAnswer) {
            return deletedAnswer
        } else {
            errorLog('answer not found for deleting')
        }
    }
}

module.exports = Answers