class QuestionController {
    constructor(questionService) {
        this.questionService = questionService
    }
    // find
    async showResult(request, response) {
        try{
            console.log(32323232323, 'in controller QUESTION')
            let questions = await this.questionService.getAllQuestions()
            console.log(questions, 4444444)
            response.json({ questions })
        }
        catch(e) {
            console.log(e.message, 15551515151515) /// amena lav error handlingi tex@
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
        } els('User not found for deleting')
    }
}

module.exports = async () => {
    try {
        const { Questions } = await require('../app_init/dal_service_init')();
        return {
            questionController: new QuestionController(Questions),
        }
    } catch (error) {
console.log(error, 210989)
        // if (error.message === "db connect error") {
        //     throw new Error('db connect error')
        // }
    }
}