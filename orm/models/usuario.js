/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('usuario', {
		usuario_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
            autoIncrement: true
		},
		nombres: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		apellidos: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		edad: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(45),
			allowNull: false,
            unique: true
        },
		contrasena: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
        telefono: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true
        },
	}, {
		tableName: 'usuario',
        timestamps:false
	});
};
