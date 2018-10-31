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
/**
 * Usuarios
 */
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
        where:{
            usuario_id:req.params.id,
        },
        include: [{
            all:true
        }]
    }).then(function (users) {
        if(users)
            res.render('dashboard/user', { title: 'Dashaboard' ,data:users});
        else res.redirect('/dashboard/users/')
    });
});
router.post('/dashboard/user/update/:id', function(req, res, next) {
    models.usuario.findOne({
        usuario_id:req.params.id
    }).then(function (user) {
        if(user)
            user.update({
                email:req.body.email,
                nombres:req.body.nombres,
                apellidos:req.body.apellidos,
                edad:req.body.edad,
                telefono:req.body.telefono
            }).then(function (user) {
                res.redirect('/dashboard/user/'+user.usuario_id)
            }).catch(function (err) {
                res.redirect('/dashboard/users/')
            });
        else res.redirect('/dashboard/users/')
    });
});

/**
 * Recomendados
 */
router.get('/dashboard/recomendados', function(req, res, next) {
    models.recomendado.findAll({
        where:req.query,
        include: [{
            all:true
        }]
    }).then(function (users) {
        res.render('dashboard/recomendados', { title: 'Dashaboard' ,data:users});
    });
});
router.get('/dashboard/recomendado/:id', function(req, res, next) {
    models.recomendado.findOne({
        where:{
            telefono:req.params.id,
        },
        include: [{
            all:true
        }]
    }).then(function (users) {
        if(users)
            res.render('dashboard/recomendado', { title: 'Dashaboard' ,data:users});
        else res.redirect('/dashboard/recomendados/')
    });
});
router.post('/dashboard/recomendado/update/:id', function(req, res, next) {
    models.recomendado.findOne({
        telefono:req.params.id
    }).then(function (user) {
        if(user)
            user.updateA({
                telefono:req.body.telefono,
                nombres:req.body.nombres,
                apellidos:req.body.apellidos,
                direccion:req.body.direccion,
                descripcion:req.body.descripcion,
                foto:req.body.foto,
            }).then(function (user) {
                res.redirect('/dashboard/recomendado/'+user.telefono)
            }).catch(function (err) {
                res.redirect('/dashboard/recomendados/')
            });
        else res.redirect('/dashboard/recomendados/')
    });
});

module.exports = router;
