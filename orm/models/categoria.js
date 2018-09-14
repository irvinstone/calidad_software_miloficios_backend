/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('categoria', {
		categoria_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
            autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		descripcion: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'categoria',
        timestamps:false
	});
};
