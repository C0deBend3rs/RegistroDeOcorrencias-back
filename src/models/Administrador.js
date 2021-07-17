const {Model, DataTypes} = require('sequelize');

class Administrador extends Model {
    static init(sequelize){
        super.init({
        }, {
            sequelize,
            tableName: 'administradores'
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, {foreignKey: 'username', as: 'user'});
        this.hasMany(models.Instituicao, {foreignKey: 'username', as: 'instituicoes'});
    }
}

module.exports = Administrador;