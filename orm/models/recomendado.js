/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('recomendado', {
        telefono: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
		distrito_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
            autoIncrement: true,
			references: {
				model: 'distrito',
				key: 'distrito_id'
			}
		},
		usuario_perfil_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'usuario_perfil',
				key: 'usuario_perfil_id'
			}
		},
		oficio_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'oficio',
				key: 'oficio_id'
			}
		},
		direccion: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		nombres: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		apellidos: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		foto: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		descripcion:{
            type: DataTypes.STRING(45),
            allowNull: true
		},
		facebook:{
            type: DataTypes.STRING(45),
            allowNull: true
		},
        twitter:{
            type: DataTypes.STRING(45),
            allowNull: true
        }
	}, {
		tableName: 'recomendado',
        timestamps:false
	});
};
