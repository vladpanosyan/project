const express = require('express');
const router = express.Router();

module.exports = async (answerController) => {
    // const { answerController } = await require('../controllers/answerController')()
    router.get('/:portalId', answerController.getAll.bind(answerController));
    return  router;
  }
  