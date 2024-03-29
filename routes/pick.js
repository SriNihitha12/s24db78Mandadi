const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('randomitem', { title: 'A random item' });
});

module.exports = router;