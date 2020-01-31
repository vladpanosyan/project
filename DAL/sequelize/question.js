const sequelize = global.sequelize;
module.exports = class Question {
    constructor(model, models) {
        this.models = models;
        this.model = model;
    }

    async createQuestion(data) {
        let question = await this.model.create(data)
        question = question.get({ plain: true });
        return question
    }

    async getAllQuestions(portalToken) {
        let portalId = await this.models.Portals.findOne({raw: true,attributes: ['id'], where: {token: portalToken}})
        console.log(portalId, 654);
        let questions = await this.models.Questions.findAll({
            // raw: true,
            // nest: true,
            attributes: ['id', 'question', 'time'],
            required: true,
            where: {
                portalId: portalId.id
            },
            include: [{
                required: true,
                as: 'nickss',
                model: this.models.Nicknames
            }, {
                model: this.models.Nick_likes,
                as: 'questionManyLikes',
                // attributes: [[sequelize.fn('count', sequelize.col(`questionManyLikes.questionId`)), 'likeTotal']],
            }],
            // group: ['Questions.id'],            
            order: [[sequelize.literal('Questions.time'), 'ASC']],
        })

        // questions.forEach(item => {
        //     console.log(item.get('nickss', {plain: true}))
        //     console.log(item.get('questionManyLikes', {plain: true}))
        //     console.log(item)
        // })

        questions = questions.reduce((arr, question) => {
            const nickss = question.get('nickss', {plain: true});
            const questionManyLikes = question.get('questionManyLikes', {plain: true});
            const tmp = { 
                id: question.id,
                time: question.time,
                question: question.question,
                nickss,
                questionManyLikes: null
            };

            if(questionManyLikes.length) {
                const length = questionManyLikes.length;
                const questionLikers = [];
                questionManyLikes.forEach(item => {
                    questionLikers.push(item.nicknameId)
                })
                tmp.questionLikers = questionLikers;
                tmp.questionManyLikes = length
                arr.push(tmp)
                return arr
            } else {
                tmp.questionLikers = [];
                arr.push(tmp)
                return arr
            }
        }, [])
        // console.log(JSON.stringify(questions, null, 2));
        return questions;
    }

    async getTop10(portalId) {
        const getTop10 = await this.model.findAll({
            attributes: [[sequelize.fn('count', sequelize.col(`questionManyLikes.questionId`)), 'likeTotal'], 'id', 'question'],
            required: true,
            where: {
                portalId
            },
            include: [{
                required: true,
                as: 'nickss',
                model: this.models.Nicknames
            }, {
                model: this.models.Nick_likes,
                as: 'questionManyLikes',
                attributes:[]
            }],
            group: ['Questions.id'],
            order: sequelize.literal('likeTotal DESC'),
            limit: 3,
            subQuery: false
        });
        // console.log(JSON.stringify(getTop10, null, 2), 8888888888888);
        return getTop10;
    }

    async deleteQuestion(id) {
        let question = await this.model.destroy({ where: { id: id } })
        return question;
    }
}