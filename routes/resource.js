var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var hillstation_controller = require('../controllers/hillstations');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// hillstation ROUTES ///
// POST request for creating a hillstation.
router.post('/hillstations', hillstation_controller.hillstations_create_post);
// DELETE request to delete hillstation.
router.delete('/hillstations/:id', hillstation_controller.hillstations_delete);
// PUT request to update hillstation.
router.put('/hillstations/:id', hillstation_controller.hillstations_update_put);
// GET request for one hillstation.
router.get('/hillstations/:id', hillstation_controller.hillstations_detail);
// GET request for list of all hillstation items.
router.get('/hillstations', hillstation_controller.hillstations_list);
router.get('/hillstations/:id',hillstation_controller.hillstations_detail);
 
module.exports = router;