
const express = require('express');
const adminController = require('./../controller/admin');
const router = express.Router();


router.get('/getData/pestle/:pestle',adminController.getPestalData);
router.get('/getData/sector/:sector',adminController.getSectorData);

router.get('/getData/:para',adminController.getParameter);
router.get('/getData',adminController.getData);




module.exports = router;