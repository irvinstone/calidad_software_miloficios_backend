var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/admin', function(req, res, next) {
    res.render('login', { title: 'Login' ,data:[
            {name:"irvin"},{name:"luis"}
        ]});
});

module.exports = router;
