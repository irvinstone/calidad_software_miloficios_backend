var express = require('express');
var router = express.Router();

var models = require('../orm/models');

/* GET users listing. */
router.get('/', function(req, res, next) {
    models.recomendado_atributo.findAll({
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
    models.recomendado_atributo.create(req.body, {
            include: {
                association: models.recomendado_atributo.atributo
            }
        }
    ).then(function (result) {
        res.json(result)
    }).catch(function (err) {
        res.json(err)
    });
});
router.get('/atributo', function(req, res, next) {
    // req.body.password = crypto.createHash('sha256').update(req.body.password + config.token.secret).digest('hex');
    models.atributo.findAll({
        include: [{
            all:true
        }]
    }).then(function (result) {
        res.json(result)
    }).catch(function (err) {
        res.json(err)
    });
});
router.post('/atributo', function(req, res, next) {
    // req.body.password = crypto.createHash('sha256').update(req.body.password + config.token.secret).digest('hex');
    models.recomendado_atributo.create(req.body,{
        include: [{
            association: models.recomendado_atributo.atributo
        }]
    }).then(function (result) {
        res.json(result)
    }).catch(function (err) {
        res.json(err)
    });
});
// router.post('/auth', function(req, res, next) {
//     recomendado_atributoService.authenticar(req.body,function (err,success) {
//         if(err)res.json(err);
//         else res.json(success);
//     })
// });
// router.post('/access', function(req, res, next) {
//     recomendado_atributoService.tieneAcceso(req,function (err,success) {
//         if(err)res.json(err);
//         else res.json(success);
//     })
// });
module.exports = router;
