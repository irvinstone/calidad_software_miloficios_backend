#!/usr/bin/env node

/**
 * Module dependencies.
 */

var models = require('../orm/models');

models.sequelize.sync().then(function() {
    console.log("Base de datos mapeada!");
    process.exit();
});