const {Model, DataTypes} = require('sequelize');

class Usuario extends Model {
    static init(sequelize){
        super.init({
            username: DataTypes.STRING(20),
            username_criador: DataTypes.STRING(20),
            password: DataTypes.STRING(25)
        }, {
            sequelize,
            tableName: 'usuarios'
        })
    }

    static associate(models) {
        this.hasOne(models.Administrador, {foreignKey: 'id', as: 'adm'});
        this.hasOne(models.Gerenciador, {foreignKey: 'id', as: 'gerenciador'});
        this.hasOne(models.Solicitante, {foreignKey: 'id', as: 'solicitante'});
        this.hasMany(models.Ocorrencia, {foreignKey: 'id_criador', as: 'ocorrencias'});
        this.hasMany(models.Comentario, {foreignKey: 'id', as: 'comentarios'});
        this.belongsToMany(models.Filial, {foreignKey: 'usuario', through: 'usuario_filial', as: 'filiais'});
    }
}

module.exports = Usuario;