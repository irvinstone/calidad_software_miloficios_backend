/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('atributo', {
		atributo_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
            autoIncrement: true
		},
		tipo: {
			type: DataTypes.ENUM('LIKE','COMMENT',"SHARE"),
			allowNull: false
		},
		estado: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		}
	}, {
		tableName: 'atributo',
        timestamps:false
	});
};
