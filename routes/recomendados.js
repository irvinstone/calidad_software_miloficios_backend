var express = require('express');
var router = express.Router();

var models = require('../orm/models');
var S3Service = require('../services/S3Service');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     models.recomendado.findAll({
//         where:req.query,
//         include: [{
//             all:true
//         }]
//     }).then(function (users) {
//         res.json(users)
//     });
// });
router.get('/', function(req, res, next) {
    queryCategoria = req.query.categoria;
    queryOficio    = req.query.oficio;
    queryDistrito  = req.query.distrito;
    delete req.query.categoria;
    delete req.query.oficio;
    delete req.query.distrito;
    queryRecomendado = req.query;
    models.recomendado.findAll({
        where:queryRecomendado,
        include: [{
            model: models.oficio,
            where: queryOficio,
            include:{
                model:models.categoria,
                where:queryCategoria
            }
        },{
            model: models.distrito,
            where: queryDistrito
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
router.post('/upload', function (req, res, next) {

    S3Service.upload(req, res, function (err, success) {
        if (err) res.json(err);
        else
            res.json({foto: success})
    });
});
module.exports = router;
