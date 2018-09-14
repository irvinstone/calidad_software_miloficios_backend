/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('distrito', {
		distrito_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
            autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING(45),
			allowNull: false
		}
	}, {
		tableName: 'distrito',
        timestamps:false
	});
};
