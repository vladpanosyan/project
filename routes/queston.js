const express = require('express');
const router = express.Router();

module.exports = async () => {
    const { questionController } = await require('../controllers/questionController')()
    router.get('/', questionController.showResult.bind(questionController));
    return  router;
  }
  