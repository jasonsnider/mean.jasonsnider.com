var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('cms/index', { title: 'User Authentication' });
});

module.exports = router;