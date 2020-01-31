class AnswerController {
    constructor(answerService) {
        this.answerService = answerService
    }
    // find
    async getAll(request, response) {
        try{
            const portalId = request.params.portalId;
            let answers = await this.answerService.getAllAnswers(portalId)
            response.json(answers)
        }
        catch(e) {
            console.log(e.message, 45454545454) // amena lav error handlingi tex@
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
        } else('User not found for deleting')
    }
}

module.exports = AnswerController
// module.exports = async () => {
//     try {
//         const { Answers } = await require('./index')();
//         return {
//             answerController: new AnswerController(Answers),
//         }
//     } catch (error) {
// console.log(error, 210989)
//         // if (error.message === "db connect error") {
//         //     throw new Error('db connect error')
//         // }
//     }
// }