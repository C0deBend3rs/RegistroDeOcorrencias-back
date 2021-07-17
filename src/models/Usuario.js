const {Model, DataTypes} = require('sequelize');

class Usuario extends Model {
    static init(sequelize){
        super.init({
            username: DataTypes.STRING(20),
        }, {
            sequelize,
            tableName: 'usuarios'
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, {foreignKey: 'username_criador', as: 'user_criador'});
        this.hasMany(models.Usuario, {foreignKey: 'username_criador', as: 'users_criados'});
        this.hasOne(models.Administrador, {foreignKey: 'username', as: 'adm'})
        this.hasOne(models.Gerenciador, {foreignKey: 'username', as: 'gerenciador'})
        this.hasOne(models.Solicitante, {foreignKey: 'username', as: 'solicitante'})
        this.hasMany(models.Ocorrencia, {foreignKey: 'username', as: 'ocorrencias'});

    }
}

module.exports = Usuario;