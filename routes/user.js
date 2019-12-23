const express = require('express');
const router = express.Router();

module.exports =  async () => {
  const {
    userController,

  } = await require('../controllers/userController')()
  router.get('/', userController.showResult.bind(userController));
  router.get('/c', userController.createUser.bind(userController));
  return  router;
}
