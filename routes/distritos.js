var express = require('express');
var router = express.Router();

var models = require('../orm/models');

/* GET users listing. */
router.get('/', function(req, res, next) {
    models.distrito.findAll({
        where:req.query
    }).then(function (result) {
        res.json(result)
    });
});
router.post('/', function (req, res, next) {
    // req.body.password = crypto.createHash('sha256').update(req.body.password + config.token.secret).digest('hex');
    models.distrito.create(req.body
    ).then(function (result) {
        res.json(result)
    }).catch(function (err) {
        if(err)res.status(400).json(err);
    });
});
module.exports = router;
