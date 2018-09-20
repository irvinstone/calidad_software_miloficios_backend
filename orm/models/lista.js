/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('lista', {
		lista_id: {
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
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
        usuario_perfil_id: {
            type      : DataTypes.INTEGER(11),
            allowNull : false,
            references: {
                model: 'usuario_perfil',
                key  : 'usuario_perfil_id'
            }
        }

	}, {
		tableName: 'lista',
        timestamps:false
	});
};
