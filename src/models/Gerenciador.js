const {Model, DataTypes} = require('sequelize');

class Gerenciador extends Model {
    static init(sequelize){
        super.init({
        }, {
            sequelize,
            tableName: 'gerenciadores'
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, {foreignKey: 'username', as: 'user'});
    }
}

module.exports = Gerenciador;