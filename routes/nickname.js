const express = require('express');
const router = express.Router();

module.exports =  async (nicknameController) => {
    // const { nicknameController } = await require('../controllers/nicknameController')()
  
    router.get('/', nicknameController.showResult.bind(nicknameController));
    router.post('/addNickname', nicknameController.createNickname.bind(nicknameController));
    router.post('/isLogged', nicknameController.isLogged.bind(nicknameController));
    return  router;
  }
  