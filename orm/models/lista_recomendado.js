/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('lista_recomendado', {
		lista_recomendado_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
            autoIncrement: true
		},
        lista_id: {
            type      : DataTypes.INTEGER(11),
            allowNull : false,
            references: {
                model: 'lista',
                key  : 'lista_id'
            }
        },
        telefono: {
            type      : DataTypes.INTEGER(11),
            allowNull : false,
            references: {
                model: 'recomendado',
                key  : 'telefono'
            }
        },

	}, {
		tableName: 'lista_recomendado',
        timestamps:false
	});
};
