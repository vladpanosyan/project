class AnswerController {
    constructor(answerService) {
        this.answerService = answerService
    }
    // find
    async showResult(request, response) {
        try{
            console.log(32323232323, 'in controller ANSWERS')
            let answers = await this.answerService.getAllAnswers()
            console.log(answers, 4444444)
            response.json({ answers })
        }
        catch(e) {
            console.log(e.message, 15551515151515) /// amena lav error handlingi tex@
        }
    }

    //create 
    async createAnswer(request, response) {
        const answerId = await this.answerService.createUser()
        response.json(answerId)
    }

    // delete by id
    async deleteAnswer(request, response) {
        console.log(request.params.id)
        const answerId = await this.answerService.deleteById(request.params.id)
        if (answerId) {
            response.status(200).end(`answerId in id - ${answerId.id} has deleted`)
        } els('User not found for deleting')
    }
}

module.exports = async () => {
    try {
        const { Answers } = await require('../app_init/dal_service_init')();
        return {
            answerController: new AnswerController(Answers),
        }
    } catch (error) {
console.log(error, 210989)
        // if (error.message === "db connect error") {
        //     throw new Error('db connect error')
        // }
    }
}