const {Model, DataTypes} = require('sequelize');

class Instituicao extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING(64),

        }, {
            sequelize,
            tableName: 'administradores'
        })
    }

    static associate(models) {
        this.belongsTo(models.Administrador, {foreignKey: 'username', as: 'adm_criador'});
    }
}

module.exports = Instituicao;