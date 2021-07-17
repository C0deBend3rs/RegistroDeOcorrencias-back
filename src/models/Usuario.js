const {Model, DataTypes} = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            nusp: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'usuarios'
        })
    }

    static associate(models) {
        this.belongsTo(models.Tech, {foreignKey: 'user_id', through: 'user_techs', as: 'techs'});
    }
}

module.exports = User;