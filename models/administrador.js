const { Model, DataTypes } = require('sequelize')

class Administrador extends Model {
  static init(sequelize) {
    super.init({}, {
      sequelize: sequelize,
      tableName: 'administradores'
    })
  }

  static associate(models) {
    this.belongsTo(models.Usuario, {
      foreignKey: {
        field:"username"
      }, as: "usuario"
    })
  }
}

module.exports = Administrador