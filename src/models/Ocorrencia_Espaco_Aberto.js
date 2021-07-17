const {Model, DataTypes} = require('sequelize');

class Ocorrencia_Espaco_Aberto extends Model {
    static init(sequelize){
        super.init({
        }, {
            sequelize,
            tableName: 'ocorrencias_espacos_abertos'
        })
    }

    static associate(models) {
        this.belongsTo(models.Ocorrencia, {foreignKey: 'id', as: 'ocorrencia'});
        this.belongsTo(models.Espaco_Aberto, {foreignKey: 'id', as: 'espaco_aberto'});
    }
}

module.exports = Ocorrencia_Espaco_Aberto;