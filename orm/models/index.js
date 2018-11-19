'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(__filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.json')[env];
const db        = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model    = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });
//
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

/**
 * Relaciones
 */
db.usuario.usuario_perfil           = db.usuario.hasOne(db.usuario_perfil, {foreignKey: 'usuario_id'});
db.oficio.categoria                 = db.oficio.belongsTo(db.categoria, {foreignKey: 'categoria_id'});
db.recomendado_atributo.atributo    = db.recomendado_atributo.belongsTo(db.atributo, {foreignKey: 'atributo_id'});
db.recomendado.recomendado_atributo = db.recomendado.hasMany(db.recomendado_atributo, {foreignKey: 'telefono'});
db.recomendado.distrito             = db.recomendado.belongsTo(db.distrito, {foreignKey: 'distrito_id'});
db.recomendado.oficio               = db.recomendado.belongsTo(db.oficio, {foreignKey: 'oficio_id'});
db.recomendado.usuario_perfil       = db.recomendado.belongsTo(db.usuario_perfil, {foreignKey: 'usuario_perfil_id'});

db.usuario_perfil.usuario = db.usuario_perfil.belongsTo(db.usuario,{foreignKey:'usuario_id'});
db.usuario_perfil.perfil = db.usuario_perfil.belongsTo(db.perfil,{foreignKey:'perfil_id'});

db.lista.lista_recomendado = db.lista.hasMany(db.lista_recomendado,{foreignKey:'lista_id'});
db.lista.usuario_perfil = db.lista.belongsTo(db.usuario_perfil,{foreignKey:'usuario_perfil_id'});

db.lista_recomendado.recomendado = db.lista_recomendado.belongsTo(db.recomendado,{foreignKey:'telefono'});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
