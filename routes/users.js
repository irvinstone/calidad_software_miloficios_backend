var express = require('express');
var router = express.Router();

var models = require('../orm/models');

/* GET users listing. */
router.get('/', function(req, res, next) {
    models.usuario.findAll({
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
    models.usuario.create(req.body, {
            include: {
                // association: models.usuario.usuario_perfil
                all:true
            }
        }
    ).then(function (result) {
        res.json(result)
    }).catch(function (err) {
        res.json(err)
    });
});
router.get('/perfil', function(req, res, next) {
    // req.body.password = crypto.createHash('sha256').update(req.body.password + config.token.secret).digest('hex');
    models.usuario_perfil.findAll({
        where:req.query,
        include: [{
            // association: models.usuario_perfil.usuario
            all:true
        }]
    }).then(function (result) {
        res.json(result)
    }).catch(function (err) {
        res.json(err)
    });
});
router.post('/perfil', function(req, res, next) {
    // req.body.password = crypto.createHash('sha256').update(req.body.password + config.token.secret).digest('hex');
    models.usuario.create(req.body,{
        include: [{
            association: models.usuario.usuario_perfil
        }]
    }).then(function (result) {
        res.json(result)
    }).catch(function (err) {
        res.json(err)
    });
});
// router.post('/auth', function(req, res, next) {
//     usuarioService.authenticar(req.body,function (err,success) {
//         if(err)res.json(err);
//         else res.json(success);
//     })
// });
// router.post('/access', function(req, res, next) {
//     usuarioService.tieneAcceso(req,function (err,success) {
//         if(err)res.json(err);
//         else res.json(success);
//     })
// });
module.exports = router;
