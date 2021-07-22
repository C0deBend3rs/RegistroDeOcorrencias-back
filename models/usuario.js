const { Model, DataTypes } = require('sequelize')

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      username: DataTypes.STRING,
      nome: DataTypes.STRING,
      posicao: DataTypes.STRING,
      email: DataTypes.STRING
    }, {
      sequelize: sequelize,
      tableName: 'usuarios'
    })
  }

  static associate(models) {
    this.belongsTo(models.Usuario, {
      foreignKey: {
        field:"usuario_criador",
        name: "usuarioCriador"
      }, as: "criador"
    })
  }
}

module.exports = Usuario