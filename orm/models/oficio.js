/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('oficio', {
        oficio_id   : {
            type         : DataTypes.INTEGER(11),
            allowNull    : false,
            primaryKey   : true,
            autoIncrement: true
        },
        categoria_id: {
            type      : DataTypes.INTEGER(11),
            allowNull : false,
            references: {
                model: 'categoria',
                key  : 'categoria_id'
            }
        },
        nombre      : {
            type     : DataTypes.STRING(45),
            allowNull: false
        },
        descripcion : {
            type     : DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        tableName : 'oficio',
        timestamps: false
    });
};
