const {Model, DataTypes} = require('sequelize');

class Ocorrencia extends Model {
    static init(sequelize){
        super.init({
            descricao: DataTypes.STRING(500),
            status: {type: DataTypes.STRING(16), defaultValue: 'Aberto'},
            prioridade: DataTypes.STRING(16),
            titulo: DataTypes.STRING(50),
            url: DataTypes.STRING(200),
        }, {
            sequelize,
            tableName: 'ocorrencias'
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, {foreignKey: 'id', as: 'usuario_criador'});
        this.hasMany(models.Comentario, {foreignKey: 'id', as: 'comentarios'});
        this.hasOne(models.Ocorrencia_Espaco_Aberto, {foreignKey: 'id', as: 'ocorrencia_espaco_aberto'});
        this.hasOne(models.Ocorrencia_Comodo, {foreignKey: 'id_ocorrencia', as: 'ocorrencia_comodo'});
    }
}

module.exports = Ocorrencia;