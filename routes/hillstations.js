var express = require('express');
const hillstation_controllers = require('../controllers/hillstations')
var router = express.Router();
 
/* GET home page. */
router.get('/', hillstation_controllers.hillstations_view_all_Page);
 
module.exports = router;
 