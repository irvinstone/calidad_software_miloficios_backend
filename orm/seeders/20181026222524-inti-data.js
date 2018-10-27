'use strict';

var fs = require('fs');
const path = require('path');
module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        // return queryInterface.bulkInsert('perfil', [{
        //     nombre: 'usss',
        //     estado: 1
        // }], {});

        let sql = fs.readFileSync(path.resolve(__dirname, '../config/initdata.sql'), 'utf8').toString();
        return queryInterface.sequelize.query(sql).spread((results, metadata) => {
            console.log(results);
            // Results will be an empty array and metadata will contain the number of affected rows.
        })


    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};
