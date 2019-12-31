const express = require('express');
const router = express.Router();

// function foo(req, res, next) {
//   console.log(req.headers.authorization, 85858585858585858858585)
//   next()
// }


module.exports = async (userController, authMiddleware) => {
  console.log(authMiddleware, 601)
  try {
    router.get('/', userController.showResult.bind(userController));
    router.post('/register', userController.createUser.bind(userController));
    router.get('/profile/:id', authMiddleware, userController.getUsersById.bind(userController));
    router.post('/login', userController.userLogin.bind(userController));
    return router;

  } catch (error) {
      console.log('Connection Error "from -> userRouter"', error.message, 1616161616)
  }
}
