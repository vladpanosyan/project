const express = require('express');
const router = express.Router();
// const passport = require('passport')


module.exports = async (userController, authMiddleware, facebookFuture) => {
  console.log(facebookFuture, 601)
  try {
    router.get('/', userController.showResult.bind(userController));
    router.post('/register', userController.createUser.bind(userController));
    router.get('/profile/:id', authMiddleware, userController.getUsersById.bind(userController));

    // router.get('/social/profile/:token', facebookFuture.facebookAuthCheck, userController.facebookAuthCheck.bind(userController)); 

    router.post('/login', userController.userLogin.bind(userController));

    router.post('/auth/facebook', facebookFuture.facebookAuthCheck(), userController.facebookAuthCheck.bind(userController));

    // router.get('/auth/facebook', facebookFuture.facebookNavigate());

    // router.get('/auth/facebook/callback', facebookFuture.facebookCheck(), (req, res) => {
      // console.log(req.user, 26262626262)
      // res.redirect(`api/users/auth/${req.user.access_token}`)
      // res.redirect(`/api/users/kkk/5`)
      // res.json({success: 'cors is solved'});
    // });
    return router;

  } catch (error) {
      console.log('Connection Error "from -> userRouter"', error.message, 1616161616)
  }
}
