var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/index', { title: 'Express', name: 'Julie'});
});

module.exports = router;
