const express = require('express');
const router = express.Router();

module.exports = async () => {
    const { portalController } = await require('../controllers/portalController')()
    console.log(portalController, 65656565)
    router.get('/', portalController.showResult.bind(portalController));
    return  router;
  }
  