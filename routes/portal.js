const express = require('express');
const router = express.Router();

module.exports = async () => {
    const { portalController } = await require('../controllers/portalController')()
    router.get('/', portalController.showResult.bind(portalController));
    return  router;
  }
  