/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('usuario_perfil', {
		usuario_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'usuario',
				key: 'usuario_id'
			}
		},
		perfil_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'perfil',
				key: 'perfil_id'
			}
		},
		usuario_perfil_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
            autoIncrement: true
		}
	}, {
		tableName: 'usuario_perfil',
        timestamps:false
	});
};
