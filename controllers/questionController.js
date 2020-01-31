class QuestionController {
    constructor(questionService) {
        this.questionService = questionService
    }
    // find
    async getAll(request, response) {
        try{
            const portalToken = request.params.token
            console.log(32323232323, 'in controller QUESTION')
            let questions = await this.questionService.getAllQuestions(portalToken)
            // console.log(questions, 4444444)
            response.json( questions )
        }
        catch(e) {
            console.log(e, 111222111222333) /// amena lav error handlingi tex@
            response.status(400).send({
                success: "fail",
                message: "questions not found, false portal adress"
            })
        }
    }

    //create 
    async createQuestion(request, response) {
        const questionId = await this.questionService.createUser()
        response.json(questionId)
    }

    // delete by id
    async deleteQuestion(request, response) {
        console.log(request.params.id)
        const questionId = await this.questionService.deleteById(request.params.id)
        if (questionId) {
            response.status(200).end(`questionId in id - ${questionId.id} has deleted`)
        } else('User not found for deleting')
    }

    async getTop10(request, response) {
        try {
            const portalId = request.params.portalID;
            console.log(portalId, 333444)
            const top10 = await this.questionService.getTop10(portalId);
            response.json(top10);
        } catch (error) {
            console.log(error.message, 222222)
        }
    }
}
module.exports = QuestionController