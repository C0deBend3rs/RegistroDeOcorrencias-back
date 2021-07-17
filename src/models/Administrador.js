const {Model, DataTypes} = require('sequelize');

class Administrador extends Model {
    static init(sequelize){
        super.init({
            username: DataTypes.STRING(20)
        }, {
            sequelize,
            tableName: 'administradores'
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, {foreignKey: 'id', as: 'user'});
        this.hasMany(models.Instituicao, {foreignKey: 'id', as: 'instituicoes'});
        this.hasMany(models.Filial, {foreignKey: 'id', as: 'filiais'});
        this.hasMany(models.Predio, {foreignKey: 'id', as: 'predios'});
        this.hasMany(models.Comodo, {foreignKey: 'id', as: 'comodos'});
        this.hasMany(models.Espaco_Aberto, {foreignKey: 'id', as: 'espacos_abertos'});
    }
}

module.exports = Administrador;