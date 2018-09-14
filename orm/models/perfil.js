/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('perfil', {
		perfil_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
            autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		estado: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
            defaultValue:1
		}
	}, {
		tableName: 'perfil',
        timestamps:false
	});
};
