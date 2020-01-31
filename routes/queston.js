const express = require('express');
const router = express.Router();

module.exports = async (questionController) => {
    // const { questionController } = await require('../controllers/questionController')()
    router.get('/getAll/:token', questionController.getAll.bind(questionController));
    router.get('/getTOP10/:portalID', questionController.getTop10.bind(questionController));
    return  router;
  }
  