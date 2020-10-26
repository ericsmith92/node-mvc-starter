const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
//for async work, wrap controoler in catchErrors
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', homeController.renderHome);

module.exports = router;