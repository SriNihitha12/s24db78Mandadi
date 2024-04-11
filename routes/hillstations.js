var express = require('express');
const hillstation_controllers = require('../controllers/hillstations')
var router = express.Router();
 
/* GET home page. */
router.get('/', hillstation_controllers.hillstations_view_all_Page);
/* GET detail hillstations page */
router.get('/detail', hillstation_controllers.hillstations_view_one_Page)
/* GET create hillstations page */
router.get('/create', hillstation_controllers.hillstations_create_Page);
/* GET create update page */
router.get('/update', hillstation_controllers.hillstations_update_Page);
/* GET delete hillstations page */
router.get('/delete', hillstation_controllers.hillstations_delete_Page);

module.exports = router;
 