var express = require('express');
var passport = require('passport');
const hillstation_controllers = require('../controllers/hillstations')
var router = express.Router();
 
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}
/* GET home page. */
router.get('/', hillstation_controllers.hillstations_view_all_Page);
/* GET detail hillstations page */
router.get('/detail', hillstation_controllers.hillstations_view_one_Page)
/* GET create hillstations page */
router.get('/create', secured,hillstation_controllers.hillstations_create_Page);
/* GET create update page */
router.get('/update', secured,hillstation_controllers.hillstations_update_Page);
/* GET delete hillstations page */
router.get('/delete', secured,hillstation_controllers.hillstations_delete_Page);

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});

module.exports = router;
 