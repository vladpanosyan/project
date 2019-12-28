// console.log(CONTROLLERS, 71717177717)

module.exports = async() => {
    try {
        const CONTROLLERS    = await require('./../app_init/dal_service_init')();
        const userRouter     = await require('./user')(CONTROLLERS.Users)
        const portalRouter   = await require('./portal')(CONTROLLERS.Portals)
        const nicknameRouter = await require('./nickname')(CONTROLLERS.Nicknames)
        const questionRouter = await require('./queston')(CONTROLLERS.Questions)  
        const answerRouter   = await require('./answer')(CONTROLLERS.Answers)  
    // console.log(CONTROLLERS, 5555)
    
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