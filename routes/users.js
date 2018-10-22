var express = require('express');
var crypto  = require('crypto');
var config  = require('../orm/config/config');
var usuarioService = require('../services/UserService');
var models = require('../orm/models');
var router = express.Router();

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
router.get('/perfil', function(req, res, next) {
    req.body.contrasena = crypto.createHash('sha256').update(req.body.contrasena + config.token.secret).digest('hex');
    models.usuario_perfil.findAll({
        where:req.query,
        include: [{
            // association: models.usuario_perfil.usuario
            all:true
        }]
    }).then(function (result) {
        res.json(result)
    }).catch(function (err) {
        if(err)res.status(400).json(err);
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
        if(err)res.status(400).json(err);
    });
});
router.post('/', function (req, res, next) {
    req.body.contrasena = crypto.createHash('sha256').update(req.body.contrasena + config.token.secret).digest('hex');
    models.usuario.create(req.body, {
            include: {
                // association: models.usuario.usuario_perfil
                all:true
            }
        }
    ).then(function (result) {
        res.json(result)
    }).catch(function (err) {
        if(err)res.status(400).json(err);
    });
});
router.post('/auth', function(req, res, next) {
    usuarioService.authenticar(req.body,function (err,success) {
        if(err)res.status(400).json(err);
        else res.json(success);
    })
});
router.post('/access', function(req, res, next) {
    usuarioService.tieneAcceso(req,function (err,success) {
        if(err)res.status(400).json(err);
        else res.json(success);
    })
});
module.exports = router;
