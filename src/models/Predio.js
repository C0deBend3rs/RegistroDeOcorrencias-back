const {Model, DataTypes, Sequelize} = require('sequelize');

class Predio extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING(64),
            email: DataTypes.STRING(80),
            tel_fixo: DataTypes.STRING(16),
            tel_cel: DataTypes.STRING(16)
        }, {
            sequelize,
            tableName: 'predios'
        })
    }

    static associate(models) {
        this.belongsTo(models.Filial, {foreignKey: 'id', as: 'filial'});
        this.belongsTo(models.Administrador, {foreignKey: 'id', as: 'adm_criador'});
        this.hasMany(models.Comodo, {foreignKey: 'id', as: 'comodos'});
    }
}

module.exports = Predio;