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
        this.belongsTo(models.Usuario, {foreignKey: 'id', as: 'usuario_criador'});
        this.hasMany(models.Comentario, {foreignKey: 'id', as: 'comentarios'});
        this.hasOne(models.Ocorrencia_Espaco_Aberto, {foreignKey: 'id', as: 'ocorrencia_espaco_aberto'});
        this.hasOne(models.Ocorrencia_Comodo, {foreignKey: 'id', as: 'ocorrencia_comodo'});
    }
}

module.exports = Ocorrencia;