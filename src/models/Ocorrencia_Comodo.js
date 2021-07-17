const {Model, DataTypes} = require('sequelize');

class Ocorrencia_Comodo extends Model {
    static init(sequelize){
        super.init({
        }, {
            sequelize,
            tableName: 'ocorrencias_comodos'
        })
    }

    static associate(models) {
        this.belongsTo(models.Ocorrencia, {foreignKey: 'id', as: 'ocorrencia'});
        this.belongsTo(models.Comodo, {foreignKey: 'id', as: 'comodo'});
    }
}

module.exports = Ocorrencia_Comodo;