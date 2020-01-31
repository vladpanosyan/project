const express = require('express');
const router = express.Router();

module.exports = async (portalController) => {
    // const { portalController } = await require('../controllers/portalController')()
    router.get('/getAll', portalController.getAll.bind(portalController));
    router.get('/active', portalController.getActivePortal.bind(portalController));

    router.put('/:token', portalController.startPortal.bind(portalController));

    router.post('/getUserPortals', portalController.getUserPortals.bind(portalController));
    router.post('/addPortal', portalController.createPortal.bind(portalController));
    router.post('/checkToken', portalController.checkToken.bind(portalController));
    router.post('/portalStatus', portalController.getPortalStatus.bind(portalController));
    router.get('/exp', portalController.exp.bind(portalController));
    
    return  router;
  }
  