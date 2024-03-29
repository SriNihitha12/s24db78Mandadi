var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hillstation', { title: 'Search Results hillstation' });
});

module.exports = router;