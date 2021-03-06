const {Model, DataTypes} = require('sequelize');

class Solicitante extends Model {
    static init(sequelize){
        super.init({
        }, {
            sequelize,
            tableName: 'solicitantes'
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, {foreignKey: 'id', as: 'user'});
    }
}

module.exports = Solicitante;