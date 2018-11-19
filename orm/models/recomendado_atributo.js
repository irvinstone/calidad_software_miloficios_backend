/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('recomendado_atributo', {
        recomendado_atributo_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
			autoIncrement:true
        },
		atributo_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'atributo',
				key: 'atributo_id'
			}
		},
		telefono: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'recomendado',
				key: 'telefono'
			}
		},
		valor: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		fecha: {
			type: DataTypes.DATE,
			allowNull: false
		},
        owner:{
            type:DataTypes.STRING(250),
            allowNull:true
        }
	}, {
		tableName: 'recomendado_atributo',
        timestamps:false
	});
};
