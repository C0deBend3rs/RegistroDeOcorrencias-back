const {Model, DataTypes, Sequelize} = require('sequelize');

class Comodo extends Model {
    static init(sequelize){
        super.init({
            andar: DataTypes.INTEGER,
            tipo: DataTypes.STRING(64),
            numero: DataTypes.INTEGER,
            nome: DataTypes.STRING(64),
        }, {
            sequelize,
            tableName: 'comodos'
        })
    }

    static associate(models) {
        this.belongsTo(models.Predio, {foreignKey: 'id', as: 'predio'});
        this.belongsTo(models.Administrador, {foreignKey: 'username', as: 'adm_criador'});
    }
}

module.exports = Comodo;