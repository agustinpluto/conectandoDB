var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Has colocado un nombre invalido');
});

module.exports = router;
