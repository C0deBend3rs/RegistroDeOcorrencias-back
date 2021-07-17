const {Model, DataTypes} = require('sequelize');

class Ocorrencia extends Model {
    static init(sequelize){
        super.init({
            descricao: DataTypes.STRING(500),
            status: DataTypes.STRING(16),
            prioridade: DataTypes.STRING(16)
        }, {
            sequelize,
            tableName: 'administradores'
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, {foreignKey: 'username', as: 'usuario_criador'});
    }
}

module.exports = Ocorrencia;