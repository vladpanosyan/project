const express = require('express');
const router = express.Router();

module.exports = async (questionController) => {
    // const { questionController } = await require('../controllers/questionController')()
    router.get('/getAll/:token', questionController.getAll.bind(questionController));
    return  router;
  }
  