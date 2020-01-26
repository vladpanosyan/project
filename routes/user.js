const express = require('express');
const router = express.Router();

module.exports = async (userController, authMiddleware, facebookFuture) => {
  try {
    router.get('/', userController.showResult.bind(userController));
    router.get('/profile/:id', authMiddleware, userController.getUsersById.bind(userController));
    
    router.post('/register', userController.createUser.bind(userController));
    router.post('/login', userController.userLogin.bind(userController));
    router.post('/auth/facebook', facebookFuture.facebookAuthCheck(), userController.facebookAuthCheck.bind(userController));
    router.post('/checkTokenValid', userController.checkTokenValid.bind(userController));
    router.post('/sendmail', userController.sendMail.bind(userController));
    return router;

  } catch (error) {
      console.log('Connection Error "from -> userRouter"', error.message, 1616161616)
  }
}
