var express = require('express');
var usuarioService = require('../services/UserService');
var models = require('../orm/models');
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
router.post('/auth', function(req, res, next) {
    usuarioService.authenticar(req.body,function (err,success) {
        console.log(err,success);
        if(err)res.render('login',{err:err})
        else res.render('dashboard', { title: 'Dashaboard' ,data:success});
    })
});
router.get('/dashboard/users', function(req, res, next) {
        models.usuario.findAll({
            where:req.query,
            include: [{
                all:true
            }]
        }).then(function (users) {
             res.render('dashboard/users', { title: 'Dashaboard' ,data:users});
        });
});
router.get('/dashboard/user/:id', function(req, res, next) {
    models.usuario.findOne({
        usuario_id:req.params.id,
        include: [{
            all:true
        }]
    }).then(function (users) {
        res.render('dashboard/user', { title: 'Dashaboard' ,data:users});
    });
});

module.exports = router;
