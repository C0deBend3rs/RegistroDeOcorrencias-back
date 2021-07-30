const {Model, DataTypes} = require('sequelize');

class Instituicao extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING(64),
            data_fund: DataTypes.DATE,
        }, {
            sequelize,
            tableName: 'instituicoes'
        })
    }

    static associate(models) {
        this.belongsTo(models.Administrador, {foreignKey: 'id_criador', as: 'adm_criador'});
        this.hasMany(models.Filial, {foreignKey: 'id', as: 'filiais'});
    }
}

module.exports = Instituicao;