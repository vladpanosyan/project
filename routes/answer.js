const express = require('express');
const router = express.Router();

module.exports = async () => {
    const { answerController } = await require('../controllers/answerController')()
    router.get('/', answerController.showResult.bind(answerController));
    return  router;
  }
  