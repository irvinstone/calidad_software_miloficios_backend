var express = require('express');
var router = express.Router();

var models = require('../orm/models');

/* GET users listing. */
router.get('/', function(req, res, next) {
    models.recomendado.findAll({
        where:req.query,
        include: [{
            all:true
        }]
    }).then(function (users) {
        res.json(users)
    });
});
router.post('/', function (req, res, next) {
    // req.body.password = crypto.createHash('sha256').update(req.body.password + config.token.secret).digest('hex');
    models.recomendado.create(req.body,{
        include: [{
            all:true
        }]
    }).then(function (result) {
        res.json(result)
    }).catch(function (err) {
        if(err)res.status(400).json(err);
    });
});
module.exports = router;
