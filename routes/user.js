const express = require('express');
const router = express.Router();

module.exports = async (userController) => {
  try {
    // const { userController } = await require('../controllers/userController')()
    router.get('/', userController.showResult.bind(userController));
    router.post('/register', userController.createUser.bind(userController));
    router.get('/profile/:id', userController.getUsersById.bind(userController))
    return router;

  } catch (error) {
      console.log('Connection Error "from -> userRouter"', error.message, 1616161616)
  }
}
