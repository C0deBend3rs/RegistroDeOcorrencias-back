const {Model, DataTypes, Sequelize} = require('sequelize');

class Comentario extends Model {
    static init(sequelize){
        super.init({
            texto: DataTypes.STRING(500)
        }, {
            sequelize,
            tableName: 'comentarios'
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, {foreignKey: 'username', as: 'usuario_criador'});
        this.belongsTo(models.Ocorrencia, {foreignKey: 'id', as: 'ocorrencia'});
    }
}

module.exports = Comentario;