const { authMiddleware, facebookFutures } = require('./../middlewares/JWT_passport');
// const faceFutures = require('./../middlewares/JWT_passport/fc_login');

module.exports = async() => {
    try {
        const { CONTROLLERS }    = await require('./../app_init/dal_service_init')();

        const userRouter     = await require('./user')(CONTROLLERS.Users, authMiddleware, facebookFutures)
        const portalRouter   = await require('./portal')(CONTROLLERS.Portals)
        const nicknameRouter = await require('./nickname')(CONTROLLERS.Nicknames)
        const questionRouter = await require('./queston')(CONTROLLERS.Questions)  
        const answerRouter   = await require('./answer')(CONTROLLERS.Answers)  
        // const nick_likeRouter = await require('./')
    
        return {
            userRouter,
            portalRouter,
            nicknameRouter,
            questionRouter,
            answerRouter
        }
    } catch (error) {
        console.log(error.message, 777)
    }
}