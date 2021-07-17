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
        this.hasMany(models.Filial, {foreignKey: 'username', as: 'filiais'});
        this.hasMany(models.Predio, {foreignKey: 'username', as: 'predios'});
        this.hasMany(models.Comodo, {foreignKey: 'username', as: 'comodos'});
        this.hasMany(models.Espaco_Aberto, {foreignKey: 'username', as: 'espacos_abertos'});
    }
}

module.exports = Administrador;